import { Component, input, Input,computed, Output,EventEmitter } from '@angular/core';
interface User{
  id:string,
  avatar:string,
  name:string
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true})
  user!: User;

  @Output()
  select = new EventEmitter<string>();

 /* // signals//----
  avatar = input.required<string>(); // most of companies not using yet its an efficient way to update UI
  name = input.required<string>();
   imagePath = computed(()=>{
    return '../assets/users/' + this.avatar();
  })

  */

  get imagePath() {
    return '../assets/users/' + this.user.avatar;
  }

  onSelect(){
    this.select.emit(this.user.id);
  }


}
