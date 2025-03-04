import { useCounter } from "../pages/CounterReducerPage/CounterPageContextProvider";

const GradeControls: React.FC = () => {
  const { count, addGrade, changeGrade, removeAllGrades, resetGrade } =
    useCounter();

  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={() => changeGrade(-2)} disabled={count < 3}>
        -2
      </button>
      <button onClick={() => changeGrade(-1)} disabled={count < 2}>
        -1
      </button>
      <button onClick={() => changeGrade(1)} disabled={count > 9}>
        +1
      </button>
      <button onClick={() => changeGrade(2)} disabled={count > 8}>
        +2
      </button>
      <button onClick={() => resetGrade()}>Reset</button>

      <button onClick={() => addGrade()}>Add Grade</button>
      <button onClick={() => removeAllGrades()}>Remove All Grades</button>
    </>
  );
};

export default GradeControls;
