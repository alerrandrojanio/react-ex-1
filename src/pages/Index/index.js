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
          <div className="form-outline">
            <input
              className="form-control"
              value={num1}
              onChange={e => setNum1(e.target.value)}
            />
            <label className="form-label" for="typeNumber">
              Primeiro número
            </label>
          </div>
          <div className="form-outline">
            <input
              class="form-control" 
              value={num2}
              onChange={e => setNum2(e.target.value)}
            />
            <label className="form-label" for="typeNumber">
              Segundo número
            </label>
          </div>
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
          <div className="form-outline">
            <input
              class="form-control"
              value={result}
              onChange={e => setResult(e.target.value)}
              disabled
            />
            <label className="form-label" for="typeNumber">
              Resultado
            </label>
          </div>    
        </div>
      </div>
    </form>
    </>
  )
}

export default Form;