import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const eventSchema = z.object({
  type: z.string(),
  slug: z.string().optional(),
  data: z.record(z.any()).optional(),
  timestamp: z.number().optional(),
});

const payloadSchema = z.object({
  events: z.array(eventSchema).nonempty(),
});

export type AnalyticsEvent = z.infer<typeof eventSchema> & { timestamp: number };
export type AnalyticsBatchRequest = z.infer<typeof payloadSchema>;

let store: AnalyticsEvent[] = [];
const MAX_BATCH = Number(process.env.ANALYTICS_MAX_BATCH ?? '20');
const MAX_STORE = 1000;

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = payloadSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }
    if (parsed.data.events.length > MAX_BATCH) {
      return NextResponse.json({ error: 'Too many events' }, { status: 429 });
    }
    const events: AnalyticsEvent[] = parsed.data.events.map(e => ({
      ...e,
      timestamp: e.timestamp ?? Date.now(),
    }));
    store = store.concat(events).slice(-MAX_STORE);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ events: store });
}
