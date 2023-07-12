import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {}

  createTask(taskName: string, description: string): Observable<any> {
    const task = { taskName, description };
    return this.http.post(`${environment.API_BASE_URL}/task`, task);
  }

  getTask(): Observable<any> {
    return this.http.get(`${environment.API_BASE_URL}/task`)
  }

  // Add other CRUD operations as needed
}
