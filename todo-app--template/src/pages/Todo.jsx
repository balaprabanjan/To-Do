import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

const Todo = () => {
  const [number, setNumber] = useState(1234);

  useEffect(() => {
    console.log("value changes");
  }, [number]);

  return (
    <main>
      <h1 className="text-5xl">{number}</h1>

      <button
        className="block p-10"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        increment
      </button>
      <button
        className="block p-10"
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        decrement
      </button>

      <div>
        <p>The number when divided by 10 is {number % 10}</p>
      </div>
    </main>
  );
};

export default Todo;
