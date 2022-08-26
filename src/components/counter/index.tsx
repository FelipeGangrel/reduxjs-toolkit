import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { increment, decrement } from "store/counter/slices";

export default function Counter() {
  const dispatch = useDispatch();
  const { count, lastUpdate } = useSelector(
    (state: RootState) => state.counter
  );

  const handleIncrement = useCallback((): void => {
    dispatch(increment());
  }, [dispatch]);

  const handleDecrement = useCallback((): void => {
    dispatch(decrement());
  }, [dispatch]);

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      {count}
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
