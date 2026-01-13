import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
})
export class TaskForm {
  title = '';
  description = '';
  status: Task['status'] = 'TODO';
  priority: Task['priority'] = 'LOW';

  constructor(private taskService: TaskService) {}

  submit() {
    const newTask: Task = {
      id: Date.now(),
      title: this.title,
      description: this.description,
      status: this.status,
      priority: this.priority,
    };

    this.taskService.addTask(newTask);

    // reset form
    this.title = '';
    this.description = '';
    this.status = 'TODO';
    this.priority = 'LOW';
  }
}
