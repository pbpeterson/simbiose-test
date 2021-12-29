import { Heart, HeartFill } from '@styled-icons/bootstrap'
import { useState } from 'react'
import * as S from './styles'

export type ProjectProps = {
  title: string
  city: string
  uf: string
  description: string
  approved: number
  captured: number
  onFav?: () => void
}
const Project = ({
  approved,
  captured,
  city,
  description,
  title,
  uf,
  onFav,
}: ProjectProps) => {
  const [isFavorited, setisFavorited] = useState<boolean>(false)

  const handleClick = () => {
    setisFavorited(!isFavorited)

    !!onFav && onFav()
  }

  return (
    <S.Wrapper>
      <S.Rounet>ROUANET</S.Rounet>
      <S.Title title={title.length > 30 ? title : ''}>
        {title.slice(0, 30)}
        {title.length > 30 && '...'}
      </S.Title>
      <S.City>
        {city}
        <span>{uf}</span>
      </S.City>
      <S.Description title={description.length > 120 ? description : ''}>
        {description.slice(0, 120)}
        {description.length > 120 && '...'}
      </S.Description>
      <S.InfoMoneyWrapper>
        <S.InfoMoney>
          <p>Aprovado</p>
          <S.Value>
            {' '}
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(approved)}
          </S.Value>
        </S.InfoMoney>
        <S.InfoMoney>
          <p>Captado</p>
          <S.Value>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(captured)}
          </S.Value>
        </S.InfoMoney>
      </S.InfoMoneyWrapper>

      <S.Actions>
        <S.Button>ADICIONAR</S.Button>
        <S.Heart
          onClick={handleClick}
          title={isFavorited ? 'Desfavoritar' : 'Favoritar'}
        >
          {isFavorited ? (
            <HeartFill width={28} color="#FF0000" />
          ) : (
            <Heart width={28} color="#73787d" />
          )}
        </S.Heart>
      </S.Actions>
    </S.Wrapper>
  )
}

export default Project
