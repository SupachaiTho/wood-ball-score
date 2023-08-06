import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  ClipboardDocumentListIcon,
  PlusIcon,
} from '@heroicons/react/24/solid';
import {
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
} from '@material-tailwind/react';
import { addRound, setPlayerName } from '@/stores/woodball';
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
  const roundNumber = useAppSelector(
    (state) => state.woodBall.game.roundNumber
  );
  const player = team?.players.find((player) => player.id === playerId);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  if (!player) {
    return null;
  }
  console.log(player.rounds);
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
                    setPlayerName({
                      teamId: teamId,
                      playerId: playerId,
                      playerName: e.target.value,
                    })
                  )
                }
                value={player.name}
              />
              <div className="mx-2">
                <RemovePlayerButton teamId={teamId} playerId={playerId} />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex">
              <ClipboardDocumentListIcon className="w-5 mr-2" />
              <h1 className="text-xl font-bold">รอบการแข่งขัน</h1>
            </div>
            {(player.rounds ?? [])
              .filter((_, index) => index < roundNumber)
              .map((round) => (
                <span>{round.id}</span>
              ))}
            {(player.rounds ?? []).length < roundNumber && (
              <div className="mt-4">
                <Button
                  size="sm"
                  className="flex"
                  onClick={() => dispatch(addRound({ teamId, playerId }))}>
                  <PlusIcon className="mr-1 w-4" /> เพิ่มรอบ
                </Button>
              </div>
            )}
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default memo(PlayerCard);
