import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { AppModal } from '../../entities/AppModal';
import { DeleteIcon } from '../../shared/Icon';
import { catalogStore } from '../Catalog/Catalog.store';

const StyledCancelButton = styled(Button)(() => ({
  textTransform: 'none',
  marginRight: '7px',
}));

const StyledDeleteButton = styled(Button)(() => ({
  textTransform: 'none',
}));

export const DeleteModal = observer(() => {
  const { isDeleteModalOpen, closeDeleteModal, deleteCatalogItem, activeCatalogItemTittle } = catalogStore;

  const handleClose = () => {
    closeDeleteModal();
  };

  const handleDelete = () => {
    closeDeleteModal();
    deleteCatalogItem();
  };

  return (
    <AppModal open={isDeleteModalOpen} onClose={closeDeleteModal}>
      <Box display="flex" justifyContent="space-between" alignItems="center" bgcolor="#2a2a2a" height="40px" pl="11.5px" pr="5.5px">
        <Box display="flex">
          <DeleteIcon />
          <Typography pl="1.5px">Delete sequence</Typography>
        </Box>
        <IconButton onClick={handleClose} color="inherit">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box
        bgcolor="#252525"
        height="100%"
        p="20px 12px 14px 17px"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Typography>
            The sequence <span style={{ fontWeight: '700' }}>{activeCatalogItemTittle}</span> and related objects will be permanently deleted and
            cannot be restored.
          </Typography>
          <Typography mt="20px">Are you sure you want to continue?</Typography>
        </Box>
        <Box display="flex" mt="20px" justifyContent="space-between" height="25px">
          <StyledCancelButton fullWidth variant="contained" onClick={handleClose} color="secondary">
            <Typography fontWeight="medium">Cancel</Typography>
          </StyledCancelButton>
          <StyledDeleteButton fullWidth variant="contained" onClick={handleDelete} color="warning">
            <DeleteIcon color="secondary" />
            <Typography fontWeight="medium" color="secondary">
              Delete
            </Typography>
          </StyledDeleteButton>
        </Box>
      </Box>
    </AppModal>
  );
});
