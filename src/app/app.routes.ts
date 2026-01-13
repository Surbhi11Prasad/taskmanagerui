import { Routes } from '@angular/router';
import { Login} from './pages/login/login';
import { Tasks } from './pages/tasks/tasks';
import { TaskForm } from './pages/task-form/task-form';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'tasks', component: Tasks, canActivate :[authGuard] },
  { path: 'tasks/new', component: TaskForm },
  { path: 'tasks/edit/:id', component: TaskForm },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
