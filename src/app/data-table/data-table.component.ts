import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  public grandTotal: number = 0;
  public subTotal: number = 0;
  public cart: {
    id: number;
    name: string;
    qty: number;
    price: number;
    subtotal: number;
  }[] = [];
  public show(event: any) {
    //finds the index of an array when clicked
    const index = this.cart.findIndex(content => content.id === event.id);

    // if the cart does'nt have an item. then,
    if (index === -1) {
      console.log('add: ', event)
      //push items in the array to cart.
      this.cart.push(event);

    } else {
      let findQty = this.cart[index].qty++;
    }

    this.getSubTotal()

  }
  public deletedItems(removeThis: any) {
   const removable = this.cart.findIndex(remove => remove.id === removeThis.id)
   console.log("subtotal ini", this.subTotal)

   this.cart[removable].qty--
   this.getSubTotal()
   if (this.cart[removable].qty === 0) {
     console.log('removed: ',this.cart[removable])
      this.cart.splice(removable, 1)
   }
  }

  private getSubTotal() {
    console.log('unod sang cart: ',this.cart)
    let subtotal2: any = []
    this.cart.filter((a) =>{
      this.subTotal = a.price * a.qty
      subtotal2.push(this.subTotal)
      console.log("Subtotal in:",this.subTotal)

    })
    console.log("This is subtotal 2:",subtotal2)
    this.grandTotal = subtotal2.reduce((a: number, b: number) => a+b)

  }



  constructor() { }

  ngOnInit(): void {

  }
}

