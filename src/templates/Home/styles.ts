import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${media.lessThan('huge')`
      overflow-x: hidden;
    `}
  .slick-track,
    .slick-list {
    display: flex;
  }
  .slick-slide > div {
    margin: 0 0.5rem;
    flex: 1 0 auto;
    height: 100%;
  }
  .slick-list {
    margin: 0 -0.5rem;
  }
  ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 1rem;
      }
      .slick-list {
        margin: 0 -1rem;
      }
    `}
  .slick-prev,
    .slick-next {
    display: block;
    color: black;
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    transform: translate(0, -50%);
  }
  .slick-prev {
    left: -2rem;
  }
  .slick-next {
    right: -2rem;
  }
  .slick-prev.slick-disabled,
  .slick-next.slick-disabled {
    visibility: hidden;
  }
  max-width: 110rem;
  padding: 0 1rem;
`

export const Title = styled.h2`
  margin: 2rem 0;
  color: #1a838e;
  font-weight: 500;
`
