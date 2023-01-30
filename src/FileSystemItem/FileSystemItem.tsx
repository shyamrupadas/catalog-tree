import { useState } from 'react';

import FolderIcon from '@mui/icons-material/Folder';

import s from './FileSystemItem.module.css';

export function FileSystemItem() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={s.fileSystemItem}>
      <FolderIcon fontSize="small" />
      ASSETS
    </div>
  );
}
