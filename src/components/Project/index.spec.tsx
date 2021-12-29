import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Project from '.'

const projectprops = {
  title: 'Any_Title',
  city: 'ANY_CITY',
  uf: 'AC',
  description: 'Any_description',
  approved: 300,
  captured: 500,
}

describe('Project', () => {
  it('should render Project with correct props', () => {
    render(<Project {...projectprops} />)

    expect(
      screen.getByRole('heading', { name: /any_title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/any_city/i)).toBeInTheDocument()
    expect(screen.getByText(/ac/i)).toBeInTheDocument()
    expect(screen.getByText(/any_description/i)).toBeInTheDocument()
    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()
    expect(screen.getByText('R$ 500,00')).toBeInTheDocument()
  })

  it('should call onFav when favButton is clicked', async () => {
    const onFav = jest.fn()

    render(<Project {...projectprops} onFav={onFav} />)

    userEvent.click(screen.getByTitle(/favoritar/i))

    await waitFor(() => {
      expect(onFav).toBeCalledTimes(1)
      expect(screen.getByTitle(/favoritar/i))
    })
  })

  it('should wrap the description and pass to title when it has more than 120 characters', () => {
    const description =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quae assumenda odit amet quod qui quo iste voluptatibus corporis'

    render(<Project {...projectprops} description={description} />)

    expect(
      screen.getByText(`${description.slice(0, 120)}...`)
    ).toBeInTheDocument()

    expect(screen.getByTitle(description)).toBeInTheDocument()
  })

  it('should wrap the title and pass to title attribute when it has more than 120 characters', () => {
    const title =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quae assumenda odit amet quod qui quo iste voluptatibus corporis'

    render(<Project {...projectprops} title={title} />)

    expect(screen.getByText(`${title.slice(0, 30)}...`)).toBeInTheDocument()

    expect(screen.getByTitle(title)).toBeInTheDocument()
  })
})
