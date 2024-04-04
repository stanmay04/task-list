import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task-list';
  // task=['hohoo'];
  // completed=['hohoo'];
  // inprogress=['hohoo'];
  btntxt="Add Task"
  task: any =[];
  taskForm: any;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.initForm();
    // this.task =[{name:"yaaayy",status:"new",description:"some task"},
    //   {name:"progress",status:"inprogress",description:"some task"},
    //   {name:"comp",status:"completed",description:"some task"}]
  }
  initForm(): void {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      status: [''] 
    });
  }

  submitForm(): void {
    if (this.taskForm.valid) {
      const formData = this.taskForm.value;
      this.task.push(formData);
      // Here you can handle the form submission, such as sending the data to your backend
      console.log(formData);
      console.log(this.task);
   this.taskForm.reset();
    } else {
      this.taskForm.markAllAsTouched();
    
    }
  }
}


