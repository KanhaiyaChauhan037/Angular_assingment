import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component {

  data: any;

  constructor(private http: HttpClient) { };

 ngOnInit():void {
    this.getdata()
  }
   getdata() {
     this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res) => {
       this.data = res;
       console.log("data",this.data)
     })  
  }


 

  
}
