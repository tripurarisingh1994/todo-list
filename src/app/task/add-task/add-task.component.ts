import {Component, ElementRef, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { Store } from '@ngrx/store';
import { TaskState } from 'src/app/store/app.state';
import { createTask } from 'src/app/store/actions/task.action';


@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {

  addTaskModal: HTMLElement | undefined;

  form:FormGroup = this.fb.group({
    taskName: ['', Validators.required],
    description: ['', Validators.required],
  }, {
    updateOn: 'change'
  })

  constructor(private elRef: ElementRef,
              private fb: FormBuilder, private store: Store<TaskState>)
  {
  }
  ngOnInit() {
  }

  // Return the form controls
  get fc() {
    return this.form.controls;
  }
  openAddTaskModal() {
    this.addTaskModal = <HTMLElement> this.elRef.nativeElement.querySelector('#addTaskModal')
    this.addTaskModal.style.display = 'block'
  }

  closeModal() {
    if(this.addTaskModal)
      this.addTaskModal.style.display = 'none'
  }

  saveTask() {
    if (this.form.invalid) {
      return
    }

   this.store.dispatch(createTask({ ...this.form.value }));

    this.form.reset()

  }
}
