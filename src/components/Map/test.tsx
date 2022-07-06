import Map from '.'
import { render } from '@testing-library/react'

describe('<Map />', () => {
  it('should render the correctly', () => {
    const { getByRole } = render(<Map />)

    // screen.logTestingPlaygroundURL(container)
    expect(getByRole('link', { name: /openstreetmap/i }))
  })
})
