import { observer } from 'mobx-react-lite';

import { CatalogItem } from '../../entities/CatalogItem';
import { catalogStore } from '../../vidgets/Catalog/Catalog.store';

interface IShot {
  id: string;
  parentId: string;
}
export const Shot = observer(({ id, parentId }: IShot) => {
  const title = catalogStore.shots[id];
  const { activeItemId } = catalogStore;

  const isActive = activeItemId === id;

  return <CatalogItem type="shots" id={id} title={title} parentId={parentId} isActive={isActive} />;
});
