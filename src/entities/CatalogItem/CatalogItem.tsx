import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';

import { AddBoxIcon, DeleteIcon, FolderIcon, KeyboardArrowDownIcon, KeyboardArrowRightIcon, MovieIcon } from '../../shared/Icon';
import { CatalogItemType, catalogStore } from '../../vidgets/Catalog/Catalog.store';

const leftPaddingMap = {
  folders: '5.5px',
  sequences: '21.5px',
  shots: '56.5px',
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
  paddingRight: '10.5px',
  paddingLeft: leftPaddingMap[type],
  cursor: 'default',
  '&:hover': {
    backgroundColor: '#2e2e2e',
  },
}));

const StyledIconButton = styled(IconButton)(() => ({
  width: '18px',
}));

interface ICatalogItem {
  type: CatalogItemType;
  id: string;
  title: string;
  isExpand?: boolean;
  parentId?: string;
  isActive: boolean;
}

export const CatalogItem = observer(({ type, id, title, isExpand, parentId, isActive }: ICatalogItem) => {
  const { toggleFolderExpand, toggleSequenceExpand, setActiveItemId, setActiveItemType, setActiveItemParentId, openDeleteModal, openAddModal } =
    catalogStore;

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
        <Box display={'flex'} whiteSpace="nowrap" textOverflow="ellipsis" width="145px">
          {isExpand && type !== 'shots' && <KeyboardArrowDownIcon />}
          {!isExpand && type !== 'shots' && <KeyboardArrowRightIcon />}
          {type === 'shots' ? <MovieIcon color="info" /> : <FolderIcon color="info" />}
          <Typography fontWeight="medium" ml="3.5px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" width="375px">
            {title}
          </Typography>
        </Box>

        {isActive && (
          <Box ml="15px">
            {type !== 'shots' && (
              <StyledIconButton color="inherit" onClick={handleAdd}>
                <AddBoxIcon />
              </StyledIconButton>
            )}
            {type !== 'folders' && (
              <StyledIconButton color="inherit" onClick={handleDelete}>
                <DeleteIcon />
              </StyledIconButton>
            )}
          </Box>
        )}
      </StyledCatalogItem>
    </>
  );
});
