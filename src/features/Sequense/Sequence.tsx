/* eslint-disable no-shadow */
import { Stack } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { CatalogItem } from '../../entities/CatalogItem';
import { catalogStore, IShots } from '../../vidgets/Catalog/Catalog.store';

interface ISequence {
  id: string;
  title: string;
  isExpand: boolean;
  shotIds?: string[];
  shots: IShots;
  parentId: string;
}
export const Sequence = observer(({ id, title, isExpand, shotIds, shots, parentId }: ISequence) => {
  const handleClick = () => {
    catalogStore.toggleSequenceExpand(parentId, id);
  };

  return (
    <>
      <CatalogItem id={id} title={title} isExpand={isExpand} onClick={handleClick} />
      {isExpand && (
        <Stack pl={2}>
          {shotIds?.map(id => {
            const title = shots[id];
            return <CatalogItem key={id} id={id} title={title} onClick={handleClick} />;
          })}
        </Stack>
      )}
    </>
  );
});
