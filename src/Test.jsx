import { useState } from 'react';

function Test() {
  const [colorCode, setColorCode] = useState('');
  const [color, setColor] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!colorCode) return;
    setColor(`bg-${colorCode.trim()}-400`);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="block"
          onChange={(e) => setColorCode(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div
        className={`h-40 w-40 text-red-400 ${color} transition-colors duration-300`}
      >
        dynamic background
      </div>
    </>
  );
}

export default Test;
