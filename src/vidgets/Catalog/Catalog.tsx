import { Box, Stack } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { Folder } from '../../features/Folder';

import { catalogStore } from './Catalog.store';

export const Catalog = observer(() => {
  return (
    <Box width="249px" height="100%" p="18px 0" bgcolor="#252525">
      <Stack>
        {catalogStore.folderIds.map(id => {
          const { title, isExpand, sequenceIds, sequences } = catalogStore.folders[id];

          return <Folder key={id} id={id} title={title} isExpand={isExpand} sequenceIds={sequenceIds} sequences={sequences} />;
        })}
      </Stack>
    </Box>
  );
});