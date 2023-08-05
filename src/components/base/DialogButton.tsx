import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';

const DialogButton = ({
  buttonLabel,
  buttonTitle,
  buttonDescription,
  onClick,
}: {
  buttonLabel: string;
  buttonTitle: string;
  buttonDescription: string;
  onClick: Function;
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button color="red" onClick={handleOpen} variant="gradient" size="sm">
        {buttonLabel}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{buttonTitle}</DialogHeader>
        <DialogBody divider>{buttonDescription}</DialogBody>
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
              onClick();
              handleOpen();
            }}>
            <span>ยื่นยัน</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default DialogButton;
