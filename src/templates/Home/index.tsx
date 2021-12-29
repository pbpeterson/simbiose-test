import { ArrowLeft, ArrowRight } from '@styled-icons/bootstrap'
import Project, { ProjectProps } from '../../components/Project'
import Slider, { SliderSettings } from '../../components/Slider'
import * as S from './styles'

type HomeTemplateProps = {
  projects: ProjectProps[]
}

const HomeTemplate = ({ projects }: HomeTemplateProps) => {
  const settings: SliderSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    lazyLoad: 'ondemand',
    nextArrow: <ArrowRight aria-label="next projects" />,
    prevArrow: <ArrowLeft aria-label="previous projects" />,
    dots: true,
    appendDots: (dots) => <S.Dots>{dots}</S.Dots>,
    responsive: [
      {
        breakpoint: 1375,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <S.Wrapper>
      <S.Title>Ver outros projetos do Proponente</S.Title>
      <Slider settings={settings}>
        {projects.map((project) => (
          <Project
            key={project.title}
            description={project.description}
            approved={project.approved}
            captured={project.captured}
            city={project.city}
            title={project.title}
            uf={project.uf}
          />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default HomeTemplate
