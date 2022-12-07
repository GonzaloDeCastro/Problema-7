export interface Task {
  id?: number;
  title: string;
  description: string;
  priority?: boolean;
  date?: string;
  completed?: boolean;
}
