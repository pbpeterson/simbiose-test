import { ProjectProps } from '../components/Project'
import HomeTemplate from '../templates/Home'

type HomePageProps = {
  data: ProjectProps[]
}

export default function index({ data }: HomePageProps) {
  return <HomeTemplate projects={data} />
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}limit=20`)
  const resJson = await res.json()

  const data = await resJson._embedded.projetos

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formatedData = data.map((project: any) => ({
    title: project?.nome,
    city: project?.municipio,
    uf: project.UF,
    description: project?.resumo,
    approved: project?.valor_aprovado,
    captured: project?.valor_captado,
  }))

  return {
    revalidate: 60 * 60,
    props: {
      data: formatedData,
    },
  }
}
