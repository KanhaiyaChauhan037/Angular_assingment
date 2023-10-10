import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {


// difine a list of array 
    newItem: string = '';
  // items:[] = ['Math', 'Physics', 'Chemistry', 'English'];
  items: any[] = ['Math', 'Physics', 'Chemistry', 'English'].map((text)=>({text,editing:false}));

  
    addItem() {
    if (this.newItem!== '') {
      this.items.push({ text: this.newItem, editing: false });
      this.newItem = '';
      console.log("data",this.items)
    }
    }

  editItem(item: any) {
  item.editing = true;
}

 saveItem(item: any) {
  item.editing = false; 
}

 removeItem(item: any) {
  const index = this.items.indexOf(item);
  if (index !== -1) {
    this.items.splice(index, 1);
  }
   
   
}

  
// second way to add data in an array but i get one error edit functionlity is not working
  
//    newItem: string = '';
//   items: any[] = ['Math', 'Physics', 'Chemistry', 'English'];


// addItem() {
//     if (this.newItem !== '') { 
//       this.items.push(this.newItem); 
//       this.newItem = '';
//     }
// }
  
//   toggleEditing(index: number) {
//     this.items[index].editing = !this.items[index].editing;
//   }

//   saveEdit(index: number) {
//     if (this.items[index].trim() !== '') {
//       this.items[index].editing = false;
//     }
//   }
//  removeItem(index: number) {
//     if (index >= 0 && index < this.items.length) {
//       this.items.splice(index, 1); 
//     }
//   }
}
