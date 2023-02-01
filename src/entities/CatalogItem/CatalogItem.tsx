import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MovieIcon from '@mui/icons-material/Movie';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';

import { catalogStore } from '../../vidgets/Catalog/Catalog.store';

type CatalogItemType = 'folder' | 'sequence' | 'shot';

interface ICatalogItem {
  type: CatalogItemType;
  id: string;
  title: string;
  isExpand?: boolean;
}

const leftPaddingMap = {
  folder: '14px',
  sequence: '28px',
  shot: '42px',
};

interface CatalogItemProps {
  isActive?: boolean;
  type: CatalogItemType;
}
const StyledCatalogItem = styled(Box, {
  shouldForwardProp: prop => prop !== 'isActive' && prop !== 'type',
})<CatalogItemProps>(({ isActive, type }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: isActive ? '#2e2e2e' : '',
  borderRight: isActive ? '1px solid #ffb800' : '',
  paddingRight: '16.5px',
  paddingLeft: leftPaddingMap[type],
  cursor: 'default',
  '&:hover': {
    backgroundColor: '#2e2e2e',
  },
}));

export const CatalogItem = observer(({ type, id, title, isExpand }: ICatalogItem) => {
  const isActive = catalogStore.activeItemId === id;

  const handleClick = () => {
    if (type === 'folder') {
      catalogStore.toggleFolderExpand(id);
    }

    if (type === 'sequence') {
      catalogStore.toggleSequenceExpand(id);
    }
    catalogStore.setActiveItemId(id);
  };

  return (
    <>
      <StyledCatalogItem isActive={isActive} type={type} height={'26px'} onClick={handleClick}>
        <Box display={'flex'}>
          {isExpand ? <KeyboardArrowDownIcon fontSize="small" /> : <KeyboardArrowRightIcon fontSize="small" />}

          {type === 'shot' ? <MovieIcon fontSize="small" color="info" /> : <FolderIcon fontSize="small" color="info" />}
          <Typography ml="7.5px">{title}</Typography>
        </Box>

        {isActive && (
          <Box>
            <AddBoxIcon fontSize="small" />
            <DeleteIcon fontSize="small" />
          </Box>
        )}
      </StyledCatalogItem>
    </>
  );
});
