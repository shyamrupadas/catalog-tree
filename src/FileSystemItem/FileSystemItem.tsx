import { useState } from 'react';

import FolderIcon from '@mui/icons-material/Folder';
import { Box, Typography } from '@mui/material';

interface IFileSystemItem {
  data: { title: string; childs: string[] };
}

export function FileSystemItem({ data }: IFileSystemItem) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box display={'flex'} bgcolor="#252525" height={'100%'}>
      <FolderIcon fontSize="small" />
      <Typography>{data.title.toUpperCase()}</Typography>
    </Box>
  );
}
