import { Injectable } from '@angular/core';
import { TASKS } from '../mock-task';
import { Task } from '../types';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks():Task[] {
    return TASKS;
  }
}
