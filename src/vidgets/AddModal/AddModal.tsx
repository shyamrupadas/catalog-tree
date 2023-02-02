import AddBoxIcon from '@mui/icons-material/AddBox';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, IconButton, Input, InputBase, Modal, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';

import { catalogStore } from '../Catalog/Catalog.store';

const StyledBox = styled(Box)(() => ({
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '435px',
  height: '117px',
}));

export const AddModal = observer(() => {
  const { isAddModalOpen, closeAddModal } = catalogStore;

  const handleClose = () => {
    closeAddModal();
  };

  const handleAdd = () => {
    console.log('add');
  };

  return (
    <Modal open={isAddModalOpen} onClose={closeAddModal}>
      <StyledBox>
        <Box display="flex" justifyContent="space-between" alignItems="center" bgcolor="#2a2a2a" height="40px" p="0 14px">
          <Box display="flex">
            <AddBoxIcon fontSize="small" />
            <Typography pl="10px">Add shot</Typography>
          </Box>
          <IconButton onClick={handleClose} color="inherit">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box
          bgcolor="#252525"
          height="100%"
          p="20px 18px 14px"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Typography>Enter the name:</Typography>
          </Box>
          <Box display="flex" mt="20px" justifyContent="space-between" height="25px">
            <InputBase fullWidth />
            <Button fullWidth variant="contained" onClick={handleAdd} startIcon={<AddBoxIcon />}>
              Add shot
            </Button>
          </Box>
        </Box>
      </StyledBox>
    </Modal>
  );
});
