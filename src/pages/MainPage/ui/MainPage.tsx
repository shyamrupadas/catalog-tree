import { FileSystemItem } from '../../../FileSystemItem';

import s from './MainPage.module.css';

export function MainPage() {
  return (
    <div className={s.filesystem}>
      <FileSystemItem />
    </div>
  );
}
