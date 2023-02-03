import styled from '@emotion/styled';
import { Box, Stack } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { Folder } from '../../features/Folder';

import { catalogStore } from './Catalog.store';

const StyledBox = styled(Box)(() => ({
  position: 'fixed',
  width: '249px',
  height: '100vh',
  p: '18px 0',
  overflowY: 'auto',
  overflowX: 'hidden',
  '::-webkit-scrollbar': {
    display: 'none',
  },
  backgroundColor: '#252525',
}));

export const Catalog = observer(() => {
  return (
    <StyledBox>
      <Stack>
        {catalogStore.folderIds.map(id => (
          <Folder key={id} id={id} />
        ))}
      </Stack>
    </StyledBox>
  );
});
