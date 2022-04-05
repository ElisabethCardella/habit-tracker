import { useDispatch } from "react-redux";
import { setHabits } from "../../actions/habitActions";
import DateBox from "../../components/DateBox";
import Habits from "../../components/Habits";

function HabitPage() {
  const dispatch = useDispatch();

  dispatch(
    setHabits([
      {
        name: "Gym",
      },
      {
        name: "Dance",
      },
      {
        name: "Meditation",
      },
    ])
  );

  return (
    <>
      <DateBox />
      <Habits />
    </>
  );
}
export default HabitPage;
