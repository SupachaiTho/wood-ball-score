import { useAppDispatch, useAppSelector } from '@/app/hooks';
import DialogButton from '@/components/base/DialogButton';
import { removeTeam } from '@/stores/woodball';

const RemoveTeamButton = ({ teamId }: { teamId: string }) => {
  const team = useAppSelector((state) =>
    state.woodBall.teams.find((team) => team.id === teamId)
  );
  const dispatch = useAppDispatch();
  return (
    <DialogButton
      buttonLabel="ลบทีม"
      buttonTitle={`ยื่นยันที่จะลบทีม ${team ? team.name : ''}`}
      buttonDescription={`โปรดยื่นยันเพื่อลบทีม ${
        team ? team.name : ''
      } หลังจากลบทีม ${
        team ? team.name : ''
      } คุณจะไม่สามารถกู้คืนข้อมูลที่ได้ใส่ไปได้อีก`}
      onClick={() => dispatch(removeTeam(teamId))}
    />
  );
};

export default RemoveTeamButton;
