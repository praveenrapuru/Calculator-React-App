import React, { useState } from 'react';
import styles from './calculatorStyle.css';
const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState(0)

  const handleClick = (value) => {
    setDisplay(display + value);
  }
  const handleClear =()=>{
    setDisplay('');
    setResult(0);
  }
  const handleCalculate =()=>{
   const evalResult = eval(display);
    setDisplay(evalResult.toString());
    setResult(evalResult);
  }
  return (
  <div>
    <div style={{textAlign:'-webkit-center'}}>
    <tr>
      <td colSpan={4}> 
        <p className='text'>{display || result}</p>
      </td>
    </tr>  
    <tr>
      <td>
        <button className='button button_algint'  onClick={handleClear} >AC</button>
      </td>
      <td>
        <button className='button' onClick={()=> handleClick('+/-')}>+/-</button>
      </td> 
      <td>  
        <button className='button' onClick={()=> handleClick('%')}>%</button>
      </td>
      <td>
        <button className='button-right' onClick={()=> handleClick('/')}>/</button>
      </td>
    </tr>  
    <tr>
      <td>
        <button className='button' onClick={()=> handleClick('7')}>7</button>
      </td>
      <td>
        <button className='button' onClick={()=> handleClick('8')}>8</button>
      </td> 
      <td>  
        <button className='button' onClick={() => handleClick('9')}>9</button>
      </td>
      <td>
        <button className='button-right' onClick={() => handleClick('*')}>*</button>
      </td>
    </tr>
    <tr>
      <td>
        <button className='button' onClick={() => handleClick('4')}>4</button>
      </td>
      <td>
        <button className='button' onClick={() => handleClick('5')}>5</button>
      </td> 
      <td>  
        <button className='button' onClick={() => handleClick('6')}>6</button>
      </td>
      <td>
        <button className='button-right' onClick={() => handleClick('-')}>-</button>
      </td>
    </tr>  
    <tr>
      <td>
        <button className='button' onClick={() => handleClick('1')}>1</button>
      </td>
      <td>
        <button className='button' onClick={() => handleClick('2')}>2</button>
      </td> 
      <td>  
        <button className='button' onClick={() => handleClick('3')}>3</button>
      </td>
      <td>
        <button className='button-right' onClick={() => handleClick('+')}>+</button>
      </td>
    </tr>
    <tr> 
      <td colSpan={2} >
        <button className='button' onClick={() => handleClick('0')}>0</button>
      </td> 
      <td>  
        <button className='button' onClick={() => handleClick('.')}>.</button>
      </td>
      <td>
        <button className='button-right' onClick={handleCalculate}>=</button>
      </td>
    </tr> 
    </div>
  </div>  
  );
};

export default Calculator;
