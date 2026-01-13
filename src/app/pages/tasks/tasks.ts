import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task';
import { AuthService } from '../../services/auth';
import { TaskForm } from '../task-form/task-form';
import { Header } from '../../header';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule,TaskForm,Header, FormsModule],   
  templateUrl: './tasks.html',
})
export class Tasks {
  tasks: Task[] = [];
  editingTask: Task | null = null;

  constructor(
    private taskService: TaskService, 
    private authService: AuthService) {
    this.tasks = this.taskService.getTasks();
  }

  edit(task: Task) {
    this.editingTask = { ...task };
  }

  save() {
    if (this.editingTask) {
      this.taskService.updateTask(this.editingTask);
      this.editingTask = null;
      this.tasks = this.taskService.getTasks();
    }
  }

  delete(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }

  logout() {
    this.authService.logout();
  }
}