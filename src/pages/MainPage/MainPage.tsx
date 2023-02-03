import styled from '@emotion/styled';
import { Box } from '@mui/material';

import { AddModal } from '../../vidgets/AddModal';
import { Catalog } from '../../vidgets/Catalog';
import { DeleteModal } from '../../vidgets/DeleteModal';

const StyledContent = styled(Box)(() => ({
  position: 'fixed',
  left: '249px',
  backgroundColor: '#202020',
  width: '100%',
  height: '100vh',
  padding: '10px',
}));

export function MainPage() {
  return (
    <Box display="flex">
      <Catalog />
      <StyledContent>main content</StyledContent>
      <AddModal />
      <DeleteModal />
    </Box>
  );
}
