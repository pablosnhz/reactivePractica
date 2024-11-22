import { Component, effect, signal, WritableSignal } from '@angular/core';

interface Task {
  title?: string;
  description?: string;
  priority?: number;
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  tasks: WritableSignal<Task[]> = signal<Task[]>([
    localStorage.getItem('tasks_list') ? JSON.parse(localStorage.getItem('tasks_list')!) : []
  ]);

  constructor(){
    effect(() => {
      console.log(`Tareas: ${this.tasks().length}`)
      localStorage.setItem('tasks_list', JSON.stringify(this.tasks()));
    });
  }

  onSubmit(formValue: Task){
    this.tasks.mutate(tasks => tasks.push(formValue));
  }

  deleteTask(index: number){
    this.tasks.mutate(tasks => tasks.splice(index, 1));
  }
}

