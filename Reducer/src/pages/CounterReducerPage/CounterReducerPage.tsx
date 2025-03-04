import GradeControls from "../../components/GradeControls";
import GradesList from "../../components/GradesList";
import { CounterPageContextProvider } from "./CounterPageContextProvider";

const CounterReducerPage: React.FC = () => {
  return (
    <CounterPageContextProvider>
      <div>
        <GradeControls />
        <GradesList />
      </div>
    </CounterPageContextProvider>
  );
};

export default CounterReducerPage;
