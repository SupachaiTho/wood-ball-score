import { Input } from '@material-tailwind/react';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { setGoal } from '@/stores/woodball';
import { memo } from 'react';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid';

const GameInfo = () => {
  const goalNumber = useAppSelector((state) => state.woodBall.game.goalNumber);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col p-2 mt-2 border border-blue-200 rounded-lg">
      <div className="flex p2 text-gray-700">
        <h1 className="text-2xl font-bold">ตั้งค่า</h1>
        <WrenchScrewdriverIcon className="mx-1 w-5" />
      </div>
      <div className="flex mt-2">
        <div className="p-2">
          <Input
            variant="static"
            label="จำนวนโกล"
            onChange={(e) => dispatch(setGoal(e.target.value))}
            value={goalNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(GameInfo);