import Modal from '@mui/material/Modal';
import { FC, ReactNode } from 'react';

interface ModalComponent {
  children: ReactNode;
  open: boolean;
  handleClose: () => void;
}

export const ModalComponent: FC<ModalComponent> = ({ children, open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      className={'modalPosition'}
    >
      <></>
    </Modal>
  );
};
