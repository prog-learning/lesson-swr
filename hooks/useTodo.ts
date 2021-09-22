import useSWR from 'swr';

const fetcher = async (url: string) => await fetch(url).then((r) => r.json());

export const useTodo = (): [any, (prev: any) => void] => {
  const { data: todo, mutate: setTodo } = useSWR(
    'https://jsonplaceholder.typicode.com/todos/1',
    fetcher
  );
  console.log('todo:', todo);
  return [todo, setTodo];
};
