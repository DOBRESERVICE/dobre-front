import Modal from '@mui/material/Modal';

export const ModalComponent = ({ children, open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      className={'modalPosition'}
    >
      {children}
    </Modal>
  );
};
