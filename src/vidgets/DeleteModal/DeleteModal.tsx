import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';

import { catalogStore } from '../Catalog/Catalog.store';

const StyledBox = styled(Box)(() => ({
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '435px',
  height: '193px',
}));

export const DeleteModal = observer(() => {
  const { isDeleteModalOpen, closeDeleteModal, deleteCatalogItem } = catalogStore;

  const handleClose = () => {
    closeDeleteModal();
  };

  const handleDelete = () => {
    closeDeleteModal();
    deleteCatalogItem();
  };

  return (
    <Modal open={isDeleteModalOpen} onClose={catalogStore.closeDeleteModal}>
      <StyledBox>
        <Box display="flex" justifyContent="space-between" alignItems="center" bgcolor="#2a2a2a" height="40px" p="0 14px">
          <Box display="flex">
            <DeleteIcon fontSize="small" />
            <Typography pl="10px">Delete sequence</Typography>
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
            <Typography>The sequence INFC and related objects will be permanently deleted and cannot be restored.</Typography>
            <Typography mt="20px">Are you sure you want to continue?</Typography>
          </Box>
          <Box display="flex" mt="20px" justifyContent="space-between" height="25px">
            <Button fullWidth variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button fullWidth variant="contained" startIcon={<DeleteIcon />} onClick={handleDelete}>
              Delete
            </Button>
          </Box>
        </Box>
      </StyledBox>
    </Modal>
  );
});
