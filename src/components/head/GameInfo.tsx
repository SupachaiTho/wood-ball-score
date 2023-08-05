import { Input } from '@material-tailwind/react';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { setGoal } from '@/stores/woodball';
import { memo } from 'react';

const GameInfo = () => {
  const goalNumber = useAppSelector((state) => state.woodBall.game.goalNumber);
  const dispatch = useAppDispatch();

  return (
    <div className="flex p-2 pt-4">
      <div>
        <Input
          variant="static"
          label="จำนวนโกล"
          onChange={(e) => dispatch(setGoal(e.target.value))}
          value={goalNumber}
        />
      </div>
    </div>
  );
};

export default memo(GameInfo);
