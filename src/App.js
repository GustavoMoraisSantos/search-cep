import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import api from './services/api'
import { Container, Title, ContainerInput, ButtonSearch, MainContent } from './styles/styled'
import 'antd/dist/antd.variable.min.css';
import GlobalStyle from './styles/globalCss';

function App() {
  const [ input, setInput] = useState('')
  const [cep, setCep] = useState({})
  

  async function handleSearch(){
    if( input === ''){
      alert('Preencha algum CEP')
      return;
    }
    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("")
    }catch{
      alert('Ops, erro ao buscar!')
      setInput("")
    }
  } 

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Buscador de CEP</Title>
        <ContainerInput>
          <input 
            type="text" 
            placeholder="Digite seu cep..."
            value={input}
            onChange = {(event)=> setInput(event.target.value)}
          />
          <ButtonSearch onClick={handleSearch} className="buttonSearch">
            <FiSearch size={25} color='white'/>
          </ButtonSearch>
        </ContainerInput>
        {Object.keys(cep).length > 0 && (
          <MainContent>
            <h2>CEP: {cep.cep}</h2>
            <span>{cep.logradouro}</span>
            <span>{cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade}-{cep.uf}</span>
          </MainContent>
        )}
      </Container>
    </>
  );
}

export default App;
