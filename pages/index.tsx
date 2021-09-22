import type { NextPage } from 'next';
import useSWR from 'swr';
import { useCountState } from '../hooks/useCount';
import { useTodo } from '../hooks/useTodo';

const Home: NextPage = () => {
  const [count, setCount] = useCountState(0);
  const increment = () => {
    if (!count) {
      setCount(1);
    } else {
      setCount(count + 1);
    }
  };

  const [todo, setTodo] = useTodo();
  const toggleCheck1 = () => {
    setTodo((prev: any) => ({ ...prev, checked: !prev.checked }));
  };

  const { data, mutate } = useSWR(
    'https://jsonplaceholder.typicode.com/todos/1'
  );
  const toggleCheck2 = () => {
    mutate((prev: any) => ({ ...prev, checked: !prev.checked }));
    console.log(data);
  };

  // console.log(count);
  console.log(data);
  return (
    <div>
      <h1>Lesson SWR</h1>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <div>
        {todo ? (
          <p>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={toggleCheck1}
            />
            {todo.title}
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        {data ? (
          <p>
            <input
              type='checkbox'
              checked={data.completed}
              onChange={toggleCheck2}
            />
            {data.title}
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
