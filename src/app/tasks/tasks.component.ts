import { dummyTasks } from './../dummyTasks';
import { Component, Input, EventEmitter } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // tasks = dummyTasks;
  isAddingTask = false;
  @Input({ required: true })
  userName!: string;
  @Input({ required: true })
  userId!: string;
  // private taskService: TaskService;
  // constructor(taskService: TaskService) {
  //   this.taskService = taskService;
  // }


  // shortcut provided by typescript
  constructor(private taskService:TaskService){

  }

  get selectedUsersTasks() {
   return this.taskService.getUserTasks(this.userId);
  }



  onAddNewTask() {
    this.isAddingTask = true;
  }

  onCloseDialog() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    // console.log(taskData);
   this.taskService.addTask(taskData,this.userId)
    this.isAddingTask = false;
  }


}
