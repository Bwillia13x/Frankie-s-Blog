import { render, screen } from '@/__tests__/utils/test-utils'
import { PageHeader } from '../PageHeader'

describe('PageHeader', () => {
  it('renders title and description correctly', () => {
    render(
      <PageHeader 
        title="Test Title" 
        description="Test Description" 
      />
    )
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('applies custom className when provided', () => {
    render(
      <PageHeader 
        title="Test Title" 
        description="Test Description"
        className="custom-class"
      />
    )
    
    const header = screen.getByTestId('page-header')
    expect(header).toHaveClass('custom-class')
  })

  it('renders without description when not provided', () => {
    render(<PageHeader title="Test Title" />)
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.queryByTestId('page-header-description')).not.toBeInTheDocument()
  })

  it('has correct heading hierarchy', () => {
    render(
      <PageHeader 
        title="Test Title" 
        description="Test Description" 
      />
    )
    
    const title = screen.getByRole('heading', { level: 1 })
    expect(title).toHaveTextContent('Test Title')
  })

  it('renders with minimal props', () => {
    render(<PageHeader title="Minimal Title" />)
    
    expect(screen.getByText('Minimal Title')).toBeInTheDocument()
  })
}) 