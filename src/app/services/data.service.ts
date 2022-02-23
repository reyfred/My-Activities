import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public products = [
    {id: 0, name:'Regular ', price: 50.00, stock: 15, qty: 1 },
    {id: 1, name:'Native  ', price: 35.00, stock: 47, qty: 1 },
    {id: 2, name:'Affogato', price: 25.00, stock: 32,  qty: 1},
    {id: 3, name:'Cappucci', price: 460.00, stock: 56,  qty: 1},
    {id: 4, name:'Doppio  ', price: 25.00, stock:  20, qty: 1 },
    {id: 5, name:'Cafe Au ', price: 12.00, stock: 50, qty: 1 },
    {id: 6, name:'Frappe  ', price: 15.00, stock: 50, qty: 1 },
    {id: 7, name:'Irish Coffee', price: 15.00, stock: 50, qty: 1 },
]
  addProducts():any[]{
  return this.products
}
  constructor() { }
}
