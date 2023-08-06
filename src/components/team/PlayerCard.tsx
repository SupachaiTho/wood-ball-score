import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/24/solid';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
} from '@material-tailwind/react';
import { setTeamName } from '@/stores/woodball';
import { memo, useState } from 'react';
import RemovePlayerButton from '@/components/common/dialog-button/RemovePlayerButton';

const PlayerCard = ({
  teamId,
  playerId,
}: {
  teamId: string;
  playerId: string;
}) => {
  const dispatch = useAppDispatch();
  const team = useAppSelector((state) =>
    state.woodBall.teams.find((team) => team.id === teamId)
  );
  const player = team?.players.find((player) => player.id === playerId);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  if (!player) {
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
            <span>ชื่อ {player.name}</span>
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
                label="ชื่อ"
                onChange={(e) =>
                  dispatch(
                    setTeamName({ teamId: teamId, teamName: e.target.value })
                  )
                }
                value={player.name}
              />
              <div className="mx-2">
                <RemovePlayerButton teamId={teamId} playerId={playerId} />
              </div>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default memo(PlayerCard);
