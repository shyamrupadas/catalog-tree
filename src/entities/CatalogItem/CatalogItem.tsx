import { useState } from 'react';

import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Stack, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { catalogStore } from '../../vidgets/Catalog/Catalog.store';

interface ICatalogItem {
  id: string;
  title: string;
  isExpand?: boolean;
  onClick: () => void;
}

export const CatalogItem = observer(({ id, title, isExpand, onClick }: ICatalogItem) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    onClick();
    setIsActive(!isActive);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height={'26px'}
        p="0 16.5px 0 14px"
        bgcolor={isActive ? '#2e2e2e' : ''}
        onClick={handleClick}
      >
        <Box display={'flex'}>
          {isExpand ? <KeyboardArrowDownIcon fontSize="small" /> : <KeyboardArrowRightIcon fontSize="small" />}
          <FolderIcon fontSize="small" color="folder" />
          <Typography ml="7.5px">{title}</Typography>
        </Box>
        {isActive && (
          <Box>
            <AddBoxIcon fontSize="9" />
            <DeleteIcon fontSize="9" />
          </Box>
        )}
      </Box>
    </>
  );
});
