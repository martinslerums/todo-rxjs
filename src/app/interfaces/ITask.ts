export interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

export type ITaskPayload = Omit<ITask, 'id'>;