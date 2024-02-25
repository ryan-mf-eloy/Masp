import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react'

import Schedule from '@/app/agenda/page'
 
describe('Schedule Page', () => {
  test('should be able render schedule', () => {
    render(<Schedule />)

    const role = screen.getByRole("heading", {
      name: "Programação"
    })

    expect(role).toBeDefined()
  })
})