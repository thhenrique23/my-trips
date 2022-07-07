import Map from '.'
import { render, screen } from '@testing-library/react'

describe('<Map />', () => {
  it('should render the correctly', () => {
    render(<Map />)

    // screen.logTestingPlaygroundURL(container)
    expect(screen.getByRole('link', { name: /openstreetmap/i }))
  })

  it('should render with the marker in correct place', () => {
    const places = [
      {
        id: '1',
        name: 'Petrópolis',
        slug: 'petropolis',
        location: {
          latitude: 20,
          longitude: 30
        }
      },
      {
        id: '2',
        name: 'João Pessoa',
        slug: 'joao_pessoa',
        location: {
          latitude: 120,
          longitude: -50
        }
      }
    ]

    render(<Map places={places} />)

    // screen.logTestingPlaygroundURL(container)
    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/joão pessoa/i)).toBeInTheDocument()
  })
})
