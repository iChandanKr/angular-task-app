import { Component,inject,Input, } from '@angular/core';
import { DatePipe } from '@angular/common';
import {type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({required:true})
  userTasks!:Task;


  private taskService = inject(TaskService)
  oncompleteTask(){
    this.taskService.removeTask(this.userTasks.id);
  }

}
