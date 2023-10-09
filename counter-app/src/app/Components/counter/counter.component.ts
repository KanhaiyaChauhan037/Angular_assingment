import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  counter: number = 0;

   inc(){
     this.counter++;
  }
dec(){
     this.counter--;
  }

}
