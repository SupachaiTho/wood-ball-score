import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { PlusIcon, UsersIcon } from '@heroicons/react/24/solid';
import { Button } from '@material-tailwind/react';
import { addTeam } from '@/stores/woodball';

const MainBoard = () => {
  const teams = useAppSelector((state) => state.woodBall.teams);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col p-2 mt-2 border border-blue-200 rounded-lg">
      <div className="flex text-gray-700">
        <h1 className="text-2xl font-bold">Teams</h1>
        <UsersIcon className="mx-1 w-5" />
      </div>
      <div className="flex flex-col p-2">
        {teams?.map((team) => (
          <div key={team.id}>{team.id + ' - ' + team.name}</div>
        ))}
      </div>
      <div>
        <Button size="sm" className="flex" onClick={() => dispatch(addTeam())}>
          <PlusIcon className="mr-1 w-4" /> เพิ่มทีม
        </Button>
      </div>
    </div>
  );
};

export default MainBoard;