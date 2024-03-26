import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  backgroud-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Ola
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Enviar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>nao clique</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
