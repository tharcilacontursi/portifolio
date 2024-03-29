import { Titulo } from './styles'

type Props = {
  children: string
  fontSize?: number
}

const Title = (props: Props) => (
  <Titulo fontSize={props.fontSize}>{props.children}</Titulo>
)

export default Title
