import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummyTasks";
import { type NewTaskData } from "./task/task.model";
@Injectable({providedIn:'root'})
export class TaskService {
  private tasks = dummyTasks;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId == userId)
  }
  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      userId: userId,
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    })
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
