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

  const { activeItemId } = catalogStore;

  const isActive = activeItemId === id;

  return (
    <>
      <CatalogItem type="sequences" id={id} title={title} isExpand={isExpand} parentId={parentId} isActive={isActive} />
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
