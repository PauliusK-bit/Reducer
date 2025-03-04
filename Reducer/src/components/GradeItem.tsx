import { useCounter } from "../pages/CounterReducerPage/CounterPageContextProvider";

interface GradeItemProps {
  grade: number;
  index: number;
}

const GradesItem: React.FC<GradeItemProps> = ({ grade, index }) => {
  const { removeGrade } = useCounter();

  return (
    <li>
      {grade}
      <button onClick={() => removeGrade(index)}>Delete</button>
    </li>
  );
};

export default GradesItem;
