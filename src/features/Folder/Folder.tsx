/* eslint-disable no-shadow */
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

  return (
    <>
      <CatalogItem type="folder" title={title} id={id} isExpand={isExpand} />
      {isExpand && (
        <Stack>
          {sequenceIds?.map(sequenceId => {
            return <Sequence key={sequenceId} id={sequenceId} />;
          })}
        </Stack>
      )}
    </>
  );
});
