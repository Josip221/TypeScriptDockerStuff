import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState<number | number>(0);

  const onClickHandler = () => {
    setCounter(state => state + 1);
  };
  return (
    <div>
      <div>{counter}</div>
      <button onClick={onClickHandler}>Increase counter</button>
    </div>
  );
}

export default Counter;
