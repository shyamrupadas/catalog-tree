import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MovieIcon from '@mui/icons-material/Movie';
import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';

import { CatalogItemType, catalogStore } from '../../vidgets/Catalog/Catalog.store';

const leftPaddingMap = {
  folders: '14px',
  sequences: '28px',
  shots: '60px',
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
  paddingRight: '6.5px',
  paddingLeft: leftPaddingMap[type],
  cursor: 'default',
  '&:hover': {
    backgroundColor: '#2e2e2e',
  },
}));

interface ICatalogItem {
  type: CatalogItemType;
  id: string;
  title: string;
  isExpand?: boolean;
  parentId?: string;
}

export const CatalogItem = observer(({ type, id, title, isExpand, parentId }: ICatalogItem) => {
  const {
    activeItemId,
    toggleFolderExpand,
    toggleSequenceExpand,
    setActiveItemId,
    setActiveItemType,
    setActiveItemParentId,
    openDeleteModal,
    openAddModal,
  } = catalogStore;

  const isActive = activeItemId === id;

  const handleClick = () => {
    if (type === 'folders') {
      toggleFolderExpand(id);
    }

    if (type === 'sequences') {
      toggleSequenceExpand(id);
    }
    setActiveItemId(id);
    setActiveItemType(type);
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    openAddModal();
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    openDeleteModal();

    if (parentId) {
      setActiveItemParentId(parentId);
    }
  };

  return (
    <>
      <StyledCatalogItem isActive={isActive} type={type} height={'26px'} onClick={handleClick}>
        <Box display={'flex'}>
          {isExpand && type !== 'shots' && <KeyboardArrowDownIcon fontSize="small" />}
          {!isExpand && type !== 'shots' && <KeyboardArrowRightIcon fontSize="small" />}

          {type === 'shots' ? <MovieIcon fontSize="small" color="info" /> : <FolderIcon fontSize="small" color="info" />}
          <Typography ml="7.5px">{title}</Typography>
        </Box>

        {isActive && (
          <Box>
            <IconButton color="inherit" onClick={handleAdd}>
              <AddBoxIcon fontSize="small" />
            </IconButton>
            <IconButton color="inherit" onClick={handleDelete}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
      </StyledCatalogItem>
    </>
  );
});
