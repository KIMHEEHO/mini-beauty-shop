import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type AlertDialogProps = {
  title: string;
  description: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  onConfirm?: () => void;
};

export function AlertDialog({
  title,
  description,
  open,
  setOpen,
  onConfirm,
}: AlertDialogProps) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button
            onClick={() => {
              onConfirm?.();
              handleClose();
            }}
            autoFocus
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
