export interface IColumns {
  columnTitle: string;
  content: INewTask[];
  id: string;
}

export interface IBoards {
  id: number;
  title: string;
  columns: IColumns[];
}

export interface INewTask {
  id: string;
  title: string;
  desc: string;
  subtasks: [];
  status: string;
}
