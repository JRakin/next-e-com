import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../components/Header'

describe('Header', () => {
    it('renders a header', () => {
      render(<Header />)
  
      const heading = screen.getByText('submit')
  
      expect(heading).toBeInTheDocument()
    })
  })