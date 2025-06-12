import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import fs from 'fs/promises';
import path from 'path';

// Get projects
export async function GET() {
  const session = await getServerSession();
  
  if (!session || (session.user as any)?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const projectsPath = path.join(process.cwd(), 'src/lib/data/projects.ts');
    const fileContent = await fs.readFile(projectsPath, 'utf-8');
    
    // Extract the projects array from the file
    const projectsMatch = fileContent.match(/export const projects: Project\[\] = (\[[\s\S]*?\]);/);
    if (!projectsMatch) {
      throw new Error('Projects array not found');
    }

    // Parse the projects array (this is a simplified approach)
    const projectsString = projectsMatch[1];
    const projects = eval(`(${projectsString})`);

    return NextResponse.json({ projects });
  } catch (error) {
    console.error('Error reading projects:', error);
    return NextResponse.json({ error: 'Failed to load projects' }, { status: 500 });
  }
}

// Update projects
export async function POST(request: NextRequest) {
  const session = await getServerSession();
  
  if (!session || (session.user as any)?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { projects } = await request.json();
    
    if (!Array.isArray(projects)) {
      return NextResponse.json({ error: 'Invalid projects data' }, { status: 400 });
    }

    // Read the current file
    const projectsPath = path.join(process.cwd(), 'src/lib/data/projects.ts');
    const fileContent = await fs.readFile(projectsPath, 'utf-8');

    // Create the new projects array string
    const newProjectsString = JSON.stringify(projects, null, 2);
    
    // Replace the projects array in the file
    const updatedContent = fileContent.replace(
      /export const projects: Project\[\] = \[[\s\S]*?\];/,
      `export const projects: Project[] = ${newProjectsString};`
    );

    // Write the updated content back to the file
    await fs.writeFile(projectsPath, updatedContent, 'utf-8');

    return NextResponse.json({ success: true, message: 'Projects updated successfully' });
  } catch (error) {
    console.error('Error updating projects:', error);
    return NextResponse.json({ error: 'Failed to update projects' }, { status: 500 });
  }
} 