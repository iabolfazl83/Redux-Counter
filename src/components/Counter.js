import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {INCREMENT, INCREASE, DECREMENT, TOGGLE} from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const counterVisible = useSelector(state => state.showCounter);
  const toggleCounterHandler = () => {
    dispatch({
      type: TOGGLE,
    })
  };

  const incrementHandler = () => {
    dispatch({
      type: INCREMENT,
    })
  }

  const increaseHandler = () => {
    dispatch({
      type: INCREASE,
      amount: 10
    })
  }

  const decrementHandler = () => {
    dispatch({
      type: DECREMENT,
    })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        counterVisible &&
        <>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 10</button>
          </div>
        </>
      }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
