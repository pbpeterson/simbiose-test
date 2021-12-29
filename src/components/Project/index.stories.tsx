import { Story, Meta } from '@storybook/react'
import Project, { ProjectProps } from '.'

export default {
  title: 'Project',
  component: Project,
  args: {},
} as Meta

export const Default: Story<ProjectProps> = (args) => <Project {...args} />

Default.args = {
  title: 'Projeto Teste',
  city: 'São Paulo',
  uf: 'SP',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit provident amet quam facere debitis omnis tenetur ullam eos perspiciatis repellat.',
  approved: 300,
  captured: 500,
}
