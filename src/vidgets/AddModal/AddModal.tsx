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
  marginRight: '6px',
  paddingLeft: '18px',
}));

const StyledButton = styled(Button)(() => ({
  width: '120px',
  padding: '3px',
  justifyContent: 'flex-start',
  textTransform: 'none',
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
      <Box display="flex" justifyContent="space-between" alignItems="center" bgcolor="#2a2a2a" height="40px" pl="11.5px" pr="5.5px">
        <Box display="flex">
          <AddBoxIcon />
          <Typography pl="1.5px">Add shot</Typography>
        </Box>
        <IconButton onClick={handleClose} color="inherit">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box bgcolor="#252525" height="100%" p="15px 17px 14px" display="flex" flexDirection="column" justifyContent="space-between">
        <Box>
          <Typography>Enter the name:</Typography>
        </Box>
        <Box display="flex" mt="20px" justifyContent="space-between" height="25px">
          <StyledInput fullWidth value={title} onChange={e => setTitle(e.target.value)} />
          <StyledButton variant="contained" onClick={handleAdd}>
            <AddBoxIcon />
            <Typography fontWeight="medium">Add shot</Typography>
          </StyledButton>
        </Box>
      </Box>
    </AppModal>
  );
});
