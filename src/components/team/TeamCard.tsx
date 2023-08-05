import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  UserGroupIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid';
import {
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
} from '@material-tailwind/react';
import { addPlayer, setTeamName } from '@/stores/woodball';
import { memo, useState } from 'react';
import RemoveTeamButton from '@/components/common/dialog-button/RemoveTeamButton';

const TeamCard = ({ teamId }: { teamId: number }) => {
  const dispatch = useAppDispatch();
  const team = useAppSelector((state) =>
    state.woodBall.teams.find((team) => team.id === teamId)
  );
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  if (!team) {
    return null;
  }

  return (
    <div className="flex">
      <Accordion
        open={open}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          className={`border-b-0 transition-colors ${
            open ? 'text-blue-500 hover:!text-blue-700' : ''
          }`}
          onClick={toggleOpen}>
          <div className="flex flex-1 justify-between">
            <span>ชื่อทีม {team.name}</span>
            {open ? (
              <BarsArrowUpIcon className="w-5" />
            ) : (
              <BarsArrowDownIcon className="w-5" />
            )}
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <Input
                variant="static"
                label="ชื่อทีม"
                onChange={(e) =>
                  dispatch(
                    setTeamName({ teamId: teamId, teamName: e.target.value })
                  )
                }
                value={team.name}
              />
              <div className="mx-2">
                <RemoveTeamButton teamId={teamId} />
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex">
                <UserGroupIcon className="w-5 mr-2" />
                <h1 className="text-xl font-bold">รายชื่อนักกีฬา</h1>
              </div>
              {team.players.map((player) => (
                <div className="flex">{player.name}</div>
              ))}
              <div className="mt-4">
                <Button
                  size="sm"
                  className="flex"
                  onClick={() => dispatch(addPlayer(teamId))}>
                  <UserPlusIcon className="mr-1 w-4" /> เพิ่มนักกีฬา
                </Button>
              </div>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default memo(TeamCard);
