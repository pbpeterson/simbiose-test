import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 25rem;
  border: 2px solid #f5f5f5;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
`

export const Rounet = styled.h3`
  background: #fff2db;
  color: #d5a349;
  width: fit-content;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  font-weight: 500;
`

export const Title = styled.h4`
  margin: 1rem 0;
  height: 2rem;
`

export const City = styled.p`
  color: #73787d;
  > span {
    margin-left: 0.5rem;

    &::before {
      content: '•';
      margin-right: 0.5rem;
    }
  }
`

export const Description = styled.p`
  margin: 1rem 0 0 0;
  color: #73787d;
  min-height: 6rem;
`

export const InfoMoneyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const InfoMoney = styled.div`
  display: grid;
  grid-template-columns: 10rem auto;
  margin-top: 1rem;
`

export const Actions = styled.div`
  display: flex;
  margin: 1rem 0;
`

export const Button = styled.button`
  cursor: pointer;
  flex: 3;
  border-radius: 0.4rem;
  border: 0;
  padding: 0.8rem 1rem;
  color: #73787d;
`

export const Heart = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  padding: 0 1rem;
`

export const Value = styled.span`
  font-weight: bold;
`
