import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quam
      doloremque, aspernatur eius totam delectus distinctio eligendi. Voluptas
      aliquam saepe repudiandae voluptatum corporis fugiat eveniet esse, quasi
      porr o, possimus harum!
    </Paragrafo>
    <GithubSecao>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=tharcilacontursi&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=tharcilacontursi&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre
