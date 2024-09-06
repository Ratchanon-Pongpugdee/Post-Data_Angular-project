import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my_angular_project_Ep10';
  responseData$: Observable<any> | undefined;
  loadData : Boolean = false;

  constructor(private http: HttpClient){}
     postData(){
      const user = {
        id: 103,
        name: 'Ratchanon Pongpugdee',
        email: 'Programmer-SPVC@gmail.com',
        description:'Rare Student in Suphanburi-vocational-college, He disconnected from relationship and anti social.'
      }
        this.http.post('http://localhost:3000/users', user).subscribe((Response)=>{
          console.log('User was updated', Response);
        })
     }
}