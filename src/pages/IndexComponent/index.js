import react, { useState } from "react"

import Input from "../../components/Input";
import Button from "../../components/Button";
import Titulo from "../../components/Titulo";

import './styles.css'



const Form = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  function somar(e) {
    e.preventDefault();

    setResult(parseInt(num1) + parseInt(num2));
  }

  const title = process.env.REACT_APP_TITLE;

  return (
    <>
      <Titulo className="text-center mb-4">{title}</Titulo> 

    <form>
      <div className='container'>
        <div className='container-numbers'>
          <Input
            text='Primeiro número'
            value={num1}
            onChange={e => setNum1(e.target.value)}
          />
          <Input
            text='Segundo número'
            value={num2}
            onChange={e => setNum2(e.target.value)}
          />
        </div>

        <div className='container-button'>
          <Button
            className='btn btn-primary btn-lg'
            onClick={somar}
          >+</Button>
          {/* <Button
            className='btn btn-danger btn-lg'
          >Limpar</Button> */}
        </div>

        <div className='container-result'>
          <Input
            text='Resultado'
            value={result}
            onChange={e => setResult(e.target.value)}
          />
        </div>
      </div>
    </form>
    </>
  )
}

export default Form;