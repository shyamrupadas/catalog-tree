import { AddModal } from '../../vidgets/AddModal';
import { Catalog } from '../../vidgets/Catalog';
import { DeleteModal } from '../../vidgets/DeleteModal';

export function MainPage() {
  return (
    <>
      <Catalog />
      <AddModal />
      <DeleteModal />
    </>
  );
}
