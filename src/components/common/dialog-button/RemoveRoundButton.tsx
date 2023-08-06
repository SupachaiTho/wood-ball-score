import { useAppDispatch, useAppSelector } from '@/app/hooks';
import DialogButton from '@/components/base/DialogButton';
import { removeRound } from '@/stores/woodball';

const RemoveRoundButton = ({
  teamId,
  playerId,
  roundId,
}: {
  teamId: string;
  playerId: string;
  roundId: string;
}) => {
  const team = useAppSelector((state) =>
    state.woodBall.teams.find((team) => team.id === teamId)
  );
  const player = team?.players.find((player) => player.id === playerId);
  const round = player?.rounds.find((round) => round.id === roundId);
  const dispatch = useAppDispatch();
  return (
    <DialogButton
      buttonLabel="ลบรอบการแข่งขัน"
      buttonTitle={`ยื่นยันที่จะลบรอบการแข่งขันที่ ${
        round ? round.index : ''
      } ของนักกีฬา ${player ? player.name : ''}`}
      buttonDescription={`โปรดยื่นยันเพื่อลบรอบการแข่งขันที่ ${
        round ? round.index : ''
      } ของนักกีฬา ${player ? player.name : ''} หลังจากลบรอบการแข่งขันที่ ${
        round ? round.index : ''
      } คุณจะไม่สามารถกู้คืนข้อมูลที่ได้ใส่ไปได้อีก`}
      onClick={() => dispatch(removeRound({ teamId, playerId, roundId }))}
    />
  );
};

export default RemoveRoundButton;
