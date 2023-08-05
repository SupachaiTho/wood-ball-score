import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { BookmarkIcon, PlusIcon } from '@heroicons/react/24/solid';
import { Button } from '@material-tailwind/react';
import { addTeam } from '@/stores/woodball';
import { memo } from 'react';
import TeamCard from '@/components/team/TeamCard';

const MainBoard = () => {
  const teams = useAppSelector((state) => state.woodBall.teams);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col p-2 mt-2 border border-blue-200 rounded-lg">
      <div className="flex text-gray-700">
        <BookmarkIcon className="mx-1 w-5" />
        <h1 className="text-2xl font-bold">รายชื่อทีม</h1>
      </div>
      <div className="flex flex-col p-2">
        {teams?.map((team) => (
          <TeamCard key={team.id} teamId={team.id} />
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

export default memo(MainBoard);
