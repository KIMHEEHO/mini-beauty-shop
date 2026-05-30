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
        slotProps={{
          paper: {
            sx: {
              borderRadius: 3,
              padding: 1,
              minWidth: 360,
            },
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ fontWeight: "bold", fontSize: "18px" }}
        >
          {title}
        </DialogTitle>

        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ whiteSpace: "pre-line", color: "#6b7280" }}
          >
            {description}
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ padding: 2, gap: 1 }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            data-cy="cancel-button"
            sx={{
              borderColor: "#ec4899",
              color: "#ec4899",
              "&:hover": {
                borderColor: "#db2777",
                backgroundColor: "#fdf2f8",
              },
            }}
          >
            취소
          </Button>

          <Button
            onClick={() => {
              onConfirm?.();
              handleClose();
            }}
            variant="contained"
            data-cy="confirm-button"
            sx={{
              backgroundColor: "#ec4899",
              "&:hover": {
                backgroundColor: "#db2777",
              },
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
