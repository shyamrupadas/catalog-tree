import { makeAutoObservable } from 'mobx';

export interface IFolders {
  [key: string]: { title: string; isExpand: boolean; sequenceIds: string[]; sequences: ISequences };
}

export interface ISequences {
  [key: string]: {
    title: string;
    isExpand: boolean;
    shotIds?: string[];
    shots?: IShots;
  };
}

export interface IShots {
  [key: string]: string;
}
class Store {
  constructor() {
    makeAutoObservable(this);
  }

  folders: IFolders = {
    1: {
      title: 'ASSETS',
      isExpand: true,
      sequenceIds: ['5'],
      sequences: {
        5: {
          title: 'INFC',
          isExpand: true,
          shotIds: ['6', '7', '8', '9', '10', '11', '12', '13'],
          shots: {
            6: 'INFC_0010',
            7: 'INFC_0020',
            8: 'INFC_0040',
            9: 'INFC_0060',
            10: 'INFC_0120',
            11: 'INFC_0250',
            12: 'INFC_0280',
            13: 'INFC_0010',
          },
        },
      },
    },
    2: { title: 'RND', isExpand: false, sequenceIds: [], sequences: {} },
    3: { title: 'ONSET', isExpand: false, sequenceIds: [], sequences: {} },
    4: { title: 'CAPS', isExpand: false, sequenceIds: [], sequences: {} },
  };

  get folderIds() {
    return Object.keys(this.folders);
  }

  toggleFolderExpand(id: string) {
    const { isExpand } = this.folders[id];

    this.folders[id].isExpand = !isExpand;
  }

  toggleSequenceExpand(folderId: string, sequenceId: string) {
    const { isExpand } = this.folders[folderId].sequences[sequenceId];

    this.folders[folderId].sequences[sequenceId].isExpand = !isExpand;
  }
}

export const catalogStore = new Store();
