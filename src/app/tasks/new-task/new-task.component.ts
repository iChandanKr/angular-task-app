import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  title='';
  summary='';
  dueDate='';
  @Output()
  closeDialog= new EventEmitter<void>();
  @Output()
  addTask = new EventEmitter<NewTaskData>();

  onCancel(){
    this.closeDialog.emit()
  }
  onSubmit(){
    this.addTask.emit({
      title:this.title,
      summary:this.summary,
      dueDate:this.dueDate,
    })
  }

}
