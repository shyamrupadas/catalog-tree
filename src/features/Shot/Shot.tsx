import { observer } from 'mobx-react-lite';

import { CatalogItem } from '../../entities/CatalogItem';
import { catalogStore } from '../../vidgets/Catalog/Catalog.store';

interface IShot {
  id: string;
}
export const Shot = observer(({ id }: IShot) => {
  const title = catalogStore.shots[id];

  return <CatalogItem type="shot" id={id} title={title} />;
});
