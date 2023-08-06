import { memo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  TableCellsIcon,
} from '@heroicons/react/24/solid';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
} from '@material-tailwind/react';
import { setRoundIndex } from '@/stores/woodball';
import RemoveRoundButton from '@/components/common/dialog-button/RemoveRoundButton';

const RoundCard = ({
  teamId,
  playerId,
  roundId,
}: {
  teamId: string;
  playerId: string;
  roundId: string;
}) => {
  const dispatch = useAppDispatch();
  const team = useAppSelector((state) =>
    state.woodBall.teams.find((team) => team.id === teamId)
  );
  const goalNumber = useAppSelector((state) => state.woodBall.game.goalNumber);
  const player = team?.players.find((player) => player.id === playerId);
  const round = player?.rounds.find((round) => round.id === roundId);
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
            <span>รอบที่ {round?.index}</span>
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
                label="รอบที่"
                onChange={(e) =>
                  dispatch(
                    setRoundIndex({
                      teamId: teamId,
                      playerId: playerId,
                      roundId: roundId,
                      roundIndex: e.target.value,
                    })
                  )
                }
                value={round?.index}
              />
              <div className="mx-2">
                <RemoveRoundButton
                  teamId={teamId}
                  playerId={playerId}
                  roundId={roundId}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex">
              <TableCellsIcon className="w-5 mr-2" />
              <h1 className="text-xl font-bold">คะแนนแข่งขัน</h1>
            </div>
            {(round?.goals ?? [])
              .filter((_, index) => index < goalNumber)
              .map((goal) => (
                <span>{goal.score}</span>
              ))}
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default memo(RoundCard);
