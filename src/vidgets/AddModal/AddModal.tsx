import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, InputBase, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';

import { AppModal } from '../../entities/AppModal';
import { AddBoxIcon } from '../../shared/Icon';
import { catalogStore } from '../Catalog/Catalog.store';

const StyledInput = styled(InputBase)(() => ({
  backgroundColor: '#232323',
  border: '1px solid #333333',
  borderRadius: '3px',
}));

export const AddModal = observer(() => {
  const { isAddModalOpen, closeAddModal, addCatalogItem } = catalogStore;

  const [title, setTitle] = useState('');

  const handleClose = () => {
    closeAddModal();
  };

  const handleAdd = () => {
    closeAddModal();
    addCatalogItem(title);
  };

  return (
    <AppModal open={isAddModalOpen} onClose={closeAddModal}>
      <Box display="flex" justifyContent="space-between" alignItems="center" bgcolor="#2a2a2a" height="40px" p="0 14px">
        <Box display="flex">
          <AddBoxIcon />
          <Typography pl="10px">Add shot</Typography>
        </Box>
        <IconButton onClick={handleClose} color="inherit">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box bgcolor="#252525" height="100%" p="20px 18px 14px" textAlign="center" display="flex" flexDirection="column" justifyContent="space-between">
        <Box>
          <Typography>Enter the name:</Typography>
        </Box>
        <Box display="flex" mt="20px" justifyContent="space-between" height="25px">
          <StyledInput fullWidth value={title} onChange={e => setTitle(e.target.value)} />
          <Button fullWidth variant="contained" onClick={handleAdd} startIcon={<AddBoxIcon />}>
            Add shot
          </Button>
        </Box>
      </Box>
    </AppModal>
  );
});
