import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { resetData } from '@/stores/woodball';
import { useAppDispatch } from '@/app/hooks';

const ResetButton = () => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button color="red" onClick={handleOpen} variant="gradient" size="sm">
        รีเซ็ตข้อมูลเพื่อเริ่มใหม่
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>ยื่นยันที่จะรีเซ็ตข้อมูลเพื่อเริ่มใหม่</DialogHeader>
        <DialogBody divider>
          โปรดยื่นยันเพื่อรีเซ็ตข้อมูลเพื่อเริ่มใหม่
          หลังจากรีเซ็ตข้อมูลคุณไม่สามารถกู้คืนข้อมูลที่ได้ใส่ไปได้อีก
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="blue"
            onClick={handleOpen}
            className="mr-1">
            <span>ยกเลิก</span>
          </Button>
          <Button
            variant="gradient"
            color="red"
            onClick={() => {
              dispatch(resetData());
              handleOpen();
            }}>
            <span>ยื่นยัน</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ResetButton;
