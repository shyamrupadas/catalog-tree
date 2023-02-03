import { Stack } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { CatalogItem } from '../../entities/CatalogItem';
import { catalogStore } from '../../vidgets/Catalog/Catalog.store';
import { Sequence } from '../Sequense';

interface IFolder {
  id: string;
}

export const Folder = observer(({ id }: IFolder) => {
  const { title, isExpand, sequenceIds } = catalogStore.folders[id];

  const { activeItemId } = catalogStore;

  const isActive = activeItemId === id;

  return (
    <>
      <CatalogItem type="folders" title={title} id={id} isExpand={isExpand} isActive={isActive} />
      {isExpand && (
        <Stack>
          {sequenceIds?.map(sequenceId => {
            return <Sequence key={sequenceId} id={sequenceId} parentId={id} />;
          })}
        </Stack>
      )}
    </>
  );
});
