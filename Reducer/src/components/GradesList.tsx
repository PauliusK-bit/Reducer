import { useCounter } from "../pages/CounterReducerPage/CounterPageContextProvider";
import GradesItem from "./GradeItem";

const GradesList: React.FC = () => {
  const { grades } = useCounter();

  return (
    <div>
      <h4>{grades.length > 0 ? "Grades:" : "No grades yet..."}</h4>

      {grades.length > 0 && (
        <ul>
          {grades.map((grade, index) => (
            <GradesItem key={index} grade={grade} index={index} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default GradesList;
