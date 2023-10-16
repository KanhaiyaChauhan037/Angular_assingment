import { Component, OnInit } from '@angular/core';
import {ExternalApiServiceService} from "../../external-api-service.service"
@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component  {

  data: any;

  constructor(private http: ExternalApiServiceService) { };

  ngOnInit(): void{
    this.http.fetchdatafromext().subscribe((res:any) => {
      this.data = res;
      console.log("data",this.data)
    })
  }


}
