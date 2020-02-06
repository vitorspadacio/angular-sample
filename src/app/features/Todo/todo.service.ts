import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) { }

  generateGuid() {
    return this.http.get('https://www.uuidgenerator.net/api/version4', { responseType: 'text' })
  }
}
