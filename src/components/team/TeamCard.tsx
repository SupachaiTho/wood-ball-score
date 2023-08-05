import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/24/solid';
import {
  Button,
  Card,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
} from '@material-tailwind/react';
import { setTeamName } from '@/stores/woodball';
import { memo, useState } from 'react';

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
    <>
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
          <Card>
            <div className="flex">
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
            </div>
            <div></div>
          </Card>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default memo(TeamCard);
