import useSWR from 'swr';

export const useCountState = (
  initialCount: number
): [number, (count: number) => void] => {
  const { data: count, mutate: setCount } = useSWR('count', null, {});
  return [count as number, setCount];
};
