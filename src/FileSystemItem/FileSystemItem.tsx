import { useState } from 'react';

import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Stack, Typography } from '@mui/material';

interface IFileSystemItem {
  data: { title: string; childs: string[] };
}

export function FileSystemItem({ data }: IFileSystemItem) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height={'26px'}
        p="0 16.5px 0 14px"
        bgcolor={isActive ? '#2e2e2e' : ''}
        onClick={() => setIsActive(!isActive)}
      >
        <Box display={'flex'}>
          {isActive ? <KeyboardArrowDownIcon fontSize="small" /> : <KeyboardArrowRightIcon fontSize="small" />}
          <FolderIcon fontSize="small" color="folder" />
          <Typography ml="7.5px">{data.title.toUpperCase()}</Typography>
        </Box>
        {isActive && (
          <Box>
            <AddBoxIcon fontSize="9" />
            <DeleteIcon fontSize="9" />
          </Box>
        )}
      </Box>
      {isActive && (
        <Stack>
          {data.childs.map(id => (
            <FileSystemItem key={id} data={{ title: id, childs: [] }} />
          ))}
        </Stack>
      )}
    </>
  );
}
