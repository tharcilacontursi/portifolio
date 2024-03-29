import styled from 'styled-components'

type Props = {
  children: string
  tipo?: string
}

export const P = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
  margin-bottom: 16px;
`
