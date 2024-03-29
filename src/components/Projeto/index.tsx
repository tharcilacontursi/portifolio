import styled from 'styled-components'

import Paragrafo from '../Paragrafo'
import { Titulo } from '../Title/styles'

const Card = styled.div`
  border: 1px solid #c1c1c1;
  padding: 16px;
`

const LinkBotao = styled.a`
  color: #fff;
  font-size: 14px;
  background-color: #4476bf;
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefa feita com VueJs</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
