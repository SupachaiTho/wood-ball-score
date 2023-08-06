import { useAppDispatch, useAppSelector } from '@/app/hooks';
import DialogButton from '@/components/base/DialogButton';
import { removePlayer } from '@/stores/woodball';

const RemovePlayerButton = ({
  teamId,
  playerId,
}: {
  teamId: string;
  playerId: string;
}) => {
  const team = useAppSelector((state) =>
    state.woodBall.teams.find((team) => team.id === teamId)
  );
  const player = team?.players.find((player) => player.id === playerId);
  const dispatch = useAppDispatch();
  return (
    <DialogButton
      buttonLabel="ลบนักกีฬา"
      buttonTitle={`ยื่นยันที่จะลบกีฬา ${player ? player.name : ''}`}
      buttonDescription={`โปรดยื่นยันเพื่อลบกีฬา ${
        player ? player.name : ''
      } หลังจากลบกีฬา ${
        player ? player.name : ''
      } คุณจะไม่สามารถกู้คืนข้อมูลที่ได้ใส่ไปได้อีก`}
      onClick={() => dispatch(removePlayer({ teamId, playerId }))}
    />
  );
};

export default RemovePlayerButton;
