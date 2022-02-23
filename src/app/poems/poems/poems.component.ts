import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from 'src/app/services/pokemon-data.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { ThisReceiver } from '@angular/compiler';
import { Observable } from 'rxjs';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

interface Iprods {
  id: number,
  prod_name: string,
  prod_category: string,
  price: number,
  condition: string,
  comment: string
}

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css']
})
export class PoemsComponent implements OnInit {

  public item !: Iprods[]
  public fId: any

  public categories:string[] = ['Electronics','Clothing','Furniture']
  public product_condition:string[] = ['Brand New', 'Refurbished', 'Second Hand']


  postsForm !: FormGroup
  constructor(
    public products: PokemonDataService,
    private formBuilder: FormBuilder
  )
  {

  }

  ngOnInit(): void {
    this.gettingPost()
    this.formCreate()
  }

  // methods
  gettingPost() {
    this.products.getpostAnything()
      .subscribe((response: Iprods[]) =>{
      this.item = response
    })
  }
 formCreate() {
     this.postsForm = this.formBuilder.group({
      id: [''],
      prod_name: ['', Validators.required],
      prod_category:['',Validators.required] ,
      price:['',Validators.required],
      condition:['',Validators.required],
      comment:['',Validators.required]
    })
  }
  postProduct() {
    this.products.postProd(this.postsForm.value)
    .subscribe((res) =>{
      console.log('Posted ? ', res)
      this.gettingPost()
      this.postsForm.reset()
    })
  }
  editProduct(id:any) {
    this.item.forEach((data)=>{
      this.postsForm.controls['id'].setValue(id.id);
      this.postsForm.controls['prod_name'].setValue(id.prod_name);
      this.postsForm.controls['prod_category'].setValue(id.prod_category);
      this.postsForm.controls['price'].setValue(id.price);
      this.postsForm.controls['condition'].setValue(id.condition);
      this.postsForm.controls['comment'].setValue(id.comment);


      // console.log('value of a: ',a)
      // console.log('value of b: ',b)
    })
  }
  saveProduct() {
    this.products.editProd(this.postsForm.value).subscribe(res => {
      this.gettingPost()
      this.postsForm.reset()
    })
  }
  remProduct(rem:any) {
    this.products.deleteProd(rem).subscribe(res => {
      this.gettingPost()
    })
  }
}
