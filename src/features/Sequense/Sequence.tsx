import { Stack } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { CatalogItem } from '../../entities/CatalogItem';
import { catalogStore } from '../../vidgets/Catalog/Catalog.store';
import { Shot } from '../Shot';

interface ISequence {
  id: string;
  parentId: string;
}
export const Sequence = observer(({ id, parentId }: ISequence) => {
  const { title, isExpand, shotIds } = catalogStore.sequences[id];

  const handleDeleteModalOpen = () => {
    catalogStore.openDeleteModal();
  };
  return (
    <>
      <CatalogItem type="sequences" id={id} title={title} isExpand={isExpand} onDeleteClick={handleDeleteModalOpen} parentId={parentId} />
      {isExpand && (
        <Stack>
          {shotIds?.map(shotId => (
            <Shot key={shotId} id={shotId} parentId={id} />
          ))}
        </Stack>
      )}
    </>
  );
});
