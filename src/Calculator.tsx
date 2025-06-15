import { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (number: string) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator: string) => {
    setEquation(display + operator);
    setDisplay('0');
  };

  const handleEquals = () => {
    const result = eval(equation + display);
    setDisplay(result.toString());
    setEquation('');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-72">
      <div className="bg-gray-100 p-4 rounded mb-4">
        <div className="text-gray-500 text-sm h-6">{equation}</div>
        <div className="text-right text-2xl font-bold">{display}</div>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        <button onClick={handleClear} className="col-span-2 bg-red-500 text-white p-2 rounded hover:bg-red-600">C</button>
        <button onClick={() => handleOperator('/')} className="bg-gray-200 p-2 rounded hover:bg-gray-300">/</button>
        <button onClick={() => handleOperator('*')} className="bg-gray-200 p-2 rounded hover:bg-gray-300">×</button>
        
        {['7', '8', '9'].map(num => (
          <button key={num} onClick={() => handleNumber(num)} className="bg-gray-100 p-2 rounded hover:bg-gray-200">{num}</button>
        ))}
        <button onClick={() => handleOperator('-')} className="bg-gray-200 p-2 rounded hover:bg-gray-300">-</button>
        
        {['4', '5', '6'].map(num => (
          <button key={num} onClick={() => handleNumber(num)} className="bg-gray-100 p-2 rounded hover:bg-gray-200">{num}</button>
        ))}
        <button onClick={() => handleOperator('+')} className="bg-gray-200 p-2 rounded hover:bg-gray-300">+</button>
        
        {['1', '2', '3'].map(num => (
          <button key={num} onClick={() => handleNumber(num)} className="bg-gray-100 p-2 rounded hover:bg-gray-200">{num}</button>
        ))}
        <button onClick={handleEquals} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 row-span-2">=</button>
        
        <button onClick={() => handleNumber('0')} className="col-span-2 bg-gray-100 p-2 rounded hover:bg-gray-200">0</button>
        <button onClick={() => handleNumber('.')} className="bg-gray-100 p-2 rounded hover:bg-gray-200">.</button>
      </div>
    </div>
  );
};

export default Calculator;