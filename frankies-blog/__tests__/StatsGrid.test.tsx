import { render, screen } from '@testing-library/react'
import { StatsGrid } from '@/components/common/StatsGrid'
import { LucideIcon } from 'lucide-react'
import React from 'react'

const MockIcon: LucideIcon = (props) => {
  return <svg data-testid="mock-icon" {...props} />
}

const stats = [
  { id: 1, label: 'Posts', value: '10', IconComponent: MockIcon },
  { id: 2, label: 'Followers', value: '200' }
]

describe('StatsGrid', () => {
  it('renders stat items', () => {
    render(<StatsGrid stats={stats} />)
    expect(screen.getByText('Posts')).toBeInTheDocument()
    expect(screen.getByText('Followers')).toBeInTheDocument()
    expect(screen.getAllByText(/\d+/).length).toBeGreaterThanOrEqual(2)
  })
})
