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
    setEquation(display + ' ' + operator + ' ');
    setDisplay('0');
  };

  const handleEqual = () => {
    const result = eval(equation + display);
    setDisplay(result.toString());
    setEquation('');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  const buttonClass = 'w-16 h-16 m-1 rounded-full text-2xl font-semibold transition-all duration-200 active:scale-95';

  return (
    <div className="bg-gray-800 p-6 rounded-3xl shadow-2xl w-[340px]">
      <div className="bg-gray-700 rounded-2xl p-4 mb-4">
        <div className="text-gray-400 text-right h-6 text-sm">{equation}</div>
        <div className="text-white text-right text-4xl font-bold truncate">{display}</div>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={handleClear}
          className={`${buttonClass} bg-red-500 hover:bg-red-600 text-white col-span-2`}
        >
          AC
        </button>
        <button
          onClick={() => handleOperator('/')}
          className={`${buttonClass} bg-yellow-500 hover:bg-yellow-600 text-white`}
        >
          ÷
        </button>
        <button
          onClick={() => handleOperator('*')}
          className={`${buttonClass} bg-yellow-500 hover:bg-yellow-600 text-white`}
        >
          ×
        </button>

        {['7', '8', '9'].map((num) => (
          <button
            key={num}
            onClick={() => handleNumber(num)}
            className={`${buttonClass} bg-gray-600 hover:bg-gray-700 text-white`}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => handleOperator('-')}
          className={`${buttonClass} bg-yellow-500 hover:bg-yellow-600 text-white`}
        >
          -
        </button>

        {['4', '5', '6'].map((num) => (
          <button
            key={num}
            onClick={() => handleNumber(num)}
            className={`${buttonClass} bg-gray-600 hover:bg-gray-700 text-white`}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => handleOperator('+')}
          className={`${buttonClass} bg-yellow-500 hover:bg-yellow-600 text-white`}
        >
          +
        </button>

        {['1', '2', '3'].map((num) => (
          <button
            key={num}
            onClick={() => handleNumber(num)}
            className={`${buttonClass} bg-gray-600 hover:bg-gray-700 text-white`}
          >
            {num}
          </button>
        ))}
        <button
          onClick={handleEqual}
          className={`${buttonClass} bg-green-500 hover:bg-green-600 text-white row-span-2`}
        >
          =
        </button>

        <button
          onClick={() => handleNumber('0')}
          className={`${buttonClass} bg-gray-600 hover:bg-gray-700 text-white col-span-2`}
        >
          0
        </button>
        <button
          onClick={() => handleNumber('.')}
          className={`${buttonClass} bg-gray-600 hover:bg-gray-700 text-white`}
        >
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
