import { makeAutoObservable } from 'mobx';

export interface IFolders {
  [key: string]: { title: string; isExpand: boolean; childs: string[] };
}

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  folders: IFolders = {
    1: { title: 'ASSETS', isExpand: false, childs: ['5', '6'] },
    2: { title: 'RND', isExpand: false, childs: [] },
    3: { title: 'ONSET', isExpand: true, childs: ['7', '8'] },
    4: { title: 'CAPS', isExpand: false, childs: [] },
  };

  get folderIds() {
    return Object.keys(this.folders);
  }

  toggleExpand(id: string) {
    const { isExpand } = this.folders[id];

    this.folders[id].isExpand = !isExpand;
  }
}

export const catalogStore = new Store();
