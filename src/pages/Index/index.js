import react, { useState } from "react"

import { Title, Container, ContainerNumbers, ContainerButton, ContainerResult, Button, Input } from './styles'

const Form = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  function somar(e) {
    e.preventDefault();

    setResult(parseInt(num1) + parseInt(num2));
  }

  function limpar(e) {
    e.preventDefault();
    
    setNum1("");
    setNum2("");
    setResult("");
  }

  const title = process.env.REACT_APP_TITLE;

  return (
    <>
      <Title className="text-center mb-4">{title}</Title> 

    <form>
      <Container>
        <ContainerNumbers>
          <div className="form-outline">
            <Input
              className="form-control"
              value={num1}
              onChange={e => setNum1(e.target.value)}
            />
            <label className="form-label" for="typeNumber">
              Primeiro número
            </label>
          </div>
          <div className="form-outline">
            <Input
              className="form-control"
              value={num2}
              onChange={e => setNum2(e.target.value)}
            />
            <label className="form-label" for="typeNumber">
              Segundo número
            </label>
          </div>
        </ContainerNumbers>

        <ContainerButton>
          <Button
            className='btn btn-primary btn-lg'
            onClick={somar}
          >
            +
          </Button>
          <Button
            className='btn btn-danger btn-lg'
            onClick={limpar}
          >
            Limpar
          </Button> 
        </ContainerButton>

        <ContainerResult>
          <div className="form-outline">
            <Input
              className="form-control"
              value={result}
              onChange={e => setResult(e.target.value)}
              disabled
            />
            <label className="form-label" for="typeNumber">
              Resultado
            </label>
              
          </div>    
        </ContainerResult>
      </Container>
    </form>
    </>
  )
}

export default Form;