export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export const TaskStatusOptions: {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TaskStatus;
  text: string;
}[] = [
  { value: 'open', taskStatus: 'OPEN', text: 'Open' },
  { value: 'done', taskStatus: 'DONE', text: 'Completed' },
  { value: 'in-progress', taskStatus: 'IN_PROGRESS', text: 'In-Progress' },
];

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
