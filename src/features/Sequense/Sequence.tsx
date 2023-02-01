/* eslint-disable no-shadow */
import { Stack } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { CatalogItem } from '../../entities/CatalogItem';
import { catalogStore } from '../../vidgets/Catalog/Catalog.store';
import { Shot } from '../Shot';

interface ISequence {
  id: string;
}
export const Sequence = observer(({ id }: ISequence) => {
  const { title, isExpand, shotIds } = catalogStore.sequences[id];

  return (
    <>
      <CatalogItem type="sequence" id={id} title={title} isExpand={isExpand} />
      {isExpand && (
        <Stack>
          {shotIds?.map(id => (
            <Shot key={id} id={id} />
          ))}
        </Stack>
      )}
    </>
  );
});
