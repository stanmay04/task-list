import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task-list';
  btntxt="Add Task"
  task: any =[];
  taskForm: any;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.initForm();
    this.loadTaskFromSessionStorage();
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
   this.taskForm.reset();
   this.saveTaskToSessionStorage();
    } else {
      this.taskForm.markAllAsTouched();
    
    }
  }
  onStatusChange(item: any): void {
    this.saveTaskToSessionStorage();

  }
  saveTaskToSessionStorage(): void {
    sessionStorage.setItem('task', JSON.stringify(this.task));
  }

  loadTaskFromSessionStorage(): void {
    const taskString = sessionStorage.getItem('task');
    if (taskString) {
      this.task = JSON.parse(taskString);
    }
  }
}


