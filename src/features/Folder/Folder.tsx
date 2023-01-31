/* eslint-disable no-shadow */
import { Stack } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { CatalogItem } from '../../entities/CatalogItem';
import { catalogStore, ISequences } from '../../vidgets/Catalog/Catalog.store';
import { Sequence } from '../Sequense';

interface IFolder {
  id: string;
  title: string;
  isExpand: boolean;
  sequenceIds?: string[];
  sequences: ISequences;
}

export const Folder = observer(({ id, title, isExpand, sequenceIds, sequences }: IFolder) => {
  const handleClick = () => {
    catalogStore.toggleFolderExpand(id);
  };

  return (
    <>
      <CatalogItem title={title} id={id} isExpand={isExpand} onClick={handleClick} />
      {isExpand && (
        <Stack pl={2}>
          {sequenceIds?.map(sequenceId => {
            const { title, isExpand, shotIds, shots } = sequences[sequenceId];
            return <Sequence key={sequenceId} parentId={id} id={sequenceId} title={title} isExpand={isExpand} shotIds={shotIds} shots={shots} />;
          })}
        </Stack>
      )}
    </>
  );
});
