import { Box, Stack } from '@mui/material';

import { FileSystemItem } from '../FileSystemItem';

const folderIds = ['1', '2', '3', '4'];

interface IFolderValues {
  [key: string]: { title: string; childs: string[] };
}

const folderValues: IFolderValues = {
  1: { title: 'assets', childs: ['5', '6'] },
  2: { title: 'rnd', childs: [] },
  3: { title: 'onset', childs: ['7', '8'] },
  4: { title: 'caps', childs: [] },
};

const sequenses = {
  ids: ['5', '6', '7', '8'],
  values: {
    5: 'infc',
    6: 'foo1',
    7: 'foo2',
    8: 'foo3',
  },
};

const shots = {
  ids: ['9', '10', '11', '12'],
  values: {},
};

export function FileSystem() {
  return (
    <Box width="249px" height="100%" p="18px 0" bgcolor="#252525">
      <Stack>
        {folderIds.map(id => (
          <FileSystemItem key={id} data={folderValues[id as keyof IFolderValues]} />
        ))}
      </Stack>
    </Box>
  );
}
