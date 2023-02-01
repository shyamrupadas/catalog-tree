import { makeAutoObservable } from 'mobx';

export interface IFolders {
  [key: string]: {
    title: string;
    isExpand: boolean;
    sequenceIds: string[];
  };
}

export interface ISequences {
  [key: string]: {
    title: string;
    isExpand: boolean;
    shotIds: string[];
  };
}

export interface IShots {
  [key: string]: string;
}

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  folderIds = ['1', '2', '3', '4'];

  folders: IFolders = {
    1: {
      title: 'ASSETS',
      isExpand: true,
      sequenceIds: ['5'],
    },
    2: { title: 'RND', isExpand: false, sequenceIds: [] },
    3: { title: 'ONSET', isExpand: false, sequenceIds: [] },
    4: { title: 'CAPS', isExpand: false, sequenceIds: [] },
  };

  sequences: ISequences = {
    5: {
      title: 'INFC',
      isExpand: false,
      shotIds: ['6', '7', '8', '9', '10', '11', '12', '13'],
    },
  };

  shots: IShots = {
    6: 'INFC_0010',
    7: 'INFC_0020',
    8: 'INFC_0040',
    9: 'INFC_0060',
    10: 'INFC_0120',
    11: 'INFC_0250',
    12: 'INFC_0280',
    13: 'INFC_0010',
  };

  activeItemId = '1';

  setActiveItemId(id: string) {
    this.activeItemId = id;
  }

  toggleFolderExpand(id: string) {
    const { isExpand } = this.folders[id];

    this.folders[id].isExpand = !isExpand;
  }

  toggleSequenceExpand(id: string) {
    const { isExpand } = this.sequences[id];

    this.sequences[id].isExpand = !isExpand;
  }
}

export const catalogStore = new Store();
