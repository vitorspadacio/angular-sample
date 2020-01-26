import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title) { }

  title = 'Angular Sample'

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }
}
