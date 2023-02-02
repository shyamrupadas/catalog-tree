import { ReactNode } from 'react';

import { Box, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(() => ({
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '434px',
}));

interface IAppModal {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}
export const AppModal = ({ children, open, onClose }: IAppModal) => {
  return (
    <Modal open={open} onClose={onClose}>
      <StyledBox>{children}</StyledBox>
    </Modal>
  );
};
