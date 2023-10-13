import { Component } from '@angular/core';

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.scss']
})
export class FormdataComponent {

  // data: any=[];
  // formSubmitted = false;
  // postdata(data: any) {

    
  // this.data = data
  //     this.formSubmitted = true;
  // }
  data: any[] = [];


  dataModel: any = {
    name: '',
    desc: '',
    price: 0
  };


  formSubmitted = false;


  postdata(formData: any) {
    if (formData) {
      const newData = { ...this.dataModel };

      newData.name = formData.name;
      newData.desc = formData.desc;
      newData.price = formData.price;

      this.data.push(newData);
     
// console.log("dat",this.data)
      this.formSubmitted = true;
    }

  }

}
