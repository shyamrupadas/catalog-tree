import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

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

export type CatalogItemType = 'folders' | 'sequences' | 'shots';

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
      isExpand: true,
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
    13: 'INFC_0340',
  };

  activeItemId = '5';

  activeItemType: CatalogItemType = 'sequences';

  activeItemParentId = '1';

  isDeleteModalOpen = false;

  isAddModalOpen = false;

  get activeCatalogItemTittle() {
    if (this.activeItemType === 'sequences') {
      return this.sequences[this.activeItemId] && this.sequences[this.activeItemId].title;
    }

    if (this.activeItemType === 'shots') {
      return this.shots[this.activeItemId] && this.shots[this.activeItemId];
    }

    return '';
  }

  toggleFolderExpand = (id: string) => {
    const { isExpand } = this.folders[id];

    this.folders[id].isExpand = !isExpand;
  };

  toggleSequenceExpand = (id: string) => {
    const { isExpand } = this.sequences[id];

    this.sequences[id].isExpand = !isExpand;
  };

  openDeleteModal = () => {
    this.isDeleteModalOpen = true;
  };

  closeDeleteModal = () => {
    this.isDeleteModalOpen = false;
  };

  openAddModal = () => {
    this.isAddModalOpen = true;
  };

  closeAddModal = () => {
    this.isAddModalOpen = false;
  };

  setActiveItemId = (id: string) => {
    this.activeItemId = id;
  };

  setActiveItemType = (type: CatalogItemType) => {
    this.activeItemType = type;
  };

  setActiveItemParentId = (id: string) => {
    this.activeItemParentId = id;
  };

  addCatalogItem = (title: string) => {
    if (this.activeItemType === 'folders') {
      this.addSequence(title);
    }

    if (this.activeItemType === 'sequences') {
      this.addShot(title);
    }
  };

  addSequence = (title: string) => {
    const { sequenceIds } = this.folders[this.activeItemId];
    const id = uuidv4();

    sequenceIds.push(id);

    this.sequences[id] = {
      title,
      isExpand: false,
      shotIds: [],
    };
  };

  addShot = (title: string) => {
    const { shotIds } = this.sequences[this.activeItemId];
    const id = uuidv4();

    shotIds.push(id);

    this.shots[id] = title;
  };

  deleteCatalogItem = () => {
    if (this.activeItemType === 'sequences') {
      this.deleteSequence();
    }

    if (this.activeItemType === 'shots') {
      this.deleteShot(this.activeItemId);
    }
  };

  deleteSequence = () => {
    const id = this.activeItemId;
    const { sequenceIds } = this.folders[this.activeItemParentId];
    const index = sequenceIds.indexOf(id);

    sequenceIds.splice(index, 1);

    this.sequences[id].shotIds.forEach(shotId => {
      delete this.shots[shotId];
    });

    delete this.sequences[id];
  };

  deleteShot = (id: string) => {
    const { shotIds } = this.sequences[this.activeItemParentId];
    const index = shotIds.indexOf(id);
    shotIds.splice(index, 1);

    delete this.shots[id];
  };
}

export const catalogStore = new Store();
