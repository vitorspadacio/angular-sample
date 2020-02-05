import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private router: Router) { }

  title = 'Angular Sample'

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
    const replacer = (key, value) => ((typeof value === 'function') ? value.name : value)
    console.log('Routes: ', JSON.stringify(this.router.config, replacer, 2))
  }
}
