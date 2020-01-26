import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent {
  tasks = [
    { id: 1, description: 'TesteA' },
    { id: 2, description: 'TesteB' },
  ]

  description = new FormControl('')

  handleAddClick() {
    const newId = this.tasks[this.tasks.length - 1].id + 1
    this.tasks = [...this.tasks, { id: newId, description: this.description.value }]
  }
}
