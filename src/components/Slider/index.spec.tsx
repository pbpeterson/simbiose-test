import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import '../../../.mocks/match-media-mock'

import Slider from '.'

describe('<Slider />', () => {
  it('should render children as slider item', () => {
    render(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>item 1</p>
        <p>item 2</p>
      </Slider>
    )

    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide  ')
  })
})
