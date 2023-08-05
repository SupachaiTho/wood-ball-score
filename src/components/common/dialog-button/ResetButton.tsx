import { useAppDispatch } from '@/app/hooks';
import DialogButton from '@/components/base/DialogButton';
import { resetData } from '@/stores/woodball';

const ResetButton = () => {
  const dispatch = useAppDispatch();
  return (
    <DialogButton
      buttonLabel="รีเซ็ตข้อมูลเพื่อเริ่มใหม่"
      buttonTitle="ยื่นยันที่จะรีเซ็ตข้อมูลเพื่อเริ่มใหม่"
      buttonDescription="โปรดยื่นยันเพื่อรีเซ็ตข้อมูลเพื่อเริ่มใหม่ หลังจากรีเซ็ตข้อมูลคุณจะไม่สามารถกู้คืนข้อมูลที่ได้ใส่ไปได้อีก"
      onClick={() => dispatch(resetData())}
    />
  );
};

export default ResetButton;
