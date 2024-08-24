import { dummyTasks } from './../dummyTasks';
import { Component, Input, EventEmitter } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = dummyTasks;
  isAddingTask = false;
  @Input({ required: true })
  userName!: string;
  @Input({ required: true })
  userId!: string;

  get selectedUsersTasks() {
    return this.tasks.filter((task) => task.userId == this.userId)
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddNewTask() {
    this.isAddingTask = true;
  }

  onCloseDialog() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    // console.log(taskData);
    this.tasks.unshift({
      userId: this.userId,
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    })
    this.isAddingTask = false;
  }


}
