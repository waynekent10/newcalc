import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay('0');
    } else if (value === '←') {
      setDisplay(display.slice(0, -1) || '0');
    } else if (value === '=') {
      try {
        // eslint-disable-next-line no-eval
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else {
      setDisplay(display === '0' ? value : display + value);
    }
  };

  const renderButton = (value, className = '') => (
    <Button
      className={`col-3 calc-btn ${className}`}
      onClick={() => handleButtonClick(value)}
    >
      {value}
    </Button>
  );

  return (
    <div id="container">
      <div className="row">
        <div className="column" id="result-screen">{display}</div>
      </div>
      <div className="row">
        {renderButton('C', 'col-6')}
        {renderButton('←')}
        {renderButton('÷', 'special-btn')}
      </div>
      <div className="row">
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('×', 'special-btn')}
      </div>
      <div className="row">
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('−', 'special-btn')}
      </div>
      <div className="row">
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('+', 'special-btn')}
      </div>
      <div className="row">
        {renderButton('0', 'col-6')}
        {renderButton('=')}
      </div>
    </div>
  );
};

export default Calculator;
