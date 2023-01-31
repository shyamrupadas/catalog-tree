import { observer } from 'mobx-react-lite';

import { CatalogItem } from '../../entities/CatalogItem';

interface IFolder {
  id: string;
  data: {
    title: string;
    isExpand: boolean;
    childs: string[];
  };
}

export const Folder = observer(({ id, data }: IFolder) => {
  return <CatalogItem title={data.title} id={id} childs={data.childs} isExpand={data.isExpand} />;
});
