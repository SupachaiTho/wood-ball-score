import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { setGoal } from "@/stores/woodball";
import { useEffect } from "react";

const GameInfo = () => {
  const goalNumber = useAppSelector((state) => state.woodBall.game.goalNumber);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setGoal(10));
  }, []);

  return (
    <div>
      <div>
        <span>Game: {goalNumber}</span>
      </div>
    </div>
  );
};

export default GameInfo;
