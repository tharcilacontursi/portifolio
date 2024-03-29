import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Title fontSize={20}>Tharcila Contursi </Title>
      <Paragrafo tipo="secundario">tharcilacontursi</Paragrafo>
      <Descricao tipo="principal">Desenvolvedora Web</Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
