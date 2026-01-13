import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({ providedIn: 'root' })
export class TaskService {

  private tasks: Task[] = [
    {
      id: 1,
      title: 'Learn Angular',
      description: 'Build task manager UI',
      status: 'TODO',
      priority: 'HIGH'
    },
    {
      id: 2,
      title: 'Connect Django API',
      description: 'Replace hardcoded data',
      status: 'IN_PROGRESS',
      priority: 'MEDIUM'
    },
    {
      id: 3,
      title: 'Deploy the App',
      description: 'Deploy to cloud platform',
      status: 'TODO',
      priority: 'MEDIUM'
    }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  updateTask(updated: Task) {
    const index = this.tasks.findIndex(t => t.id === updated.id);
    if (index !== -1) {
      this.tasks[index] = updated;
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
