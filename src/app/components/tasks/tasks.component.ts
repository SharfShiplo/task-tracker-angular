import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/types';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []
  constructor(private tasksService: TaskService) { }

  ngOnInit(): void {
   this.tasks = this.tasksService.getTasks()
  }

}
