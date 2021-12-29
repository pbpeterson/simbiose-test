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

  li.slick-active button {
    background: #a0aec0;
  }

  max-width: 110rem;
  padding: 0 1rem;
`

export const Dots = styled.ul`
  padding: 0 1rem;
  margin-top: 2rem;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  max-width: 12rem;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  text-align: center;

  button {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    border-radius: 50%;
    padding: 0.5rem;
    border: 0;
    text-indent: -100rem;
    overflow: hidden;
  }
`

export const Title = styled.h2`
  margin: 2rem 0;
  color: #1a838e;
  font-weight: 500;
`
