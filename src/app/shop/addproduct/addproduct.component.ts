import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductserviceService } from 'src/app/services/productservice.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
 categories:any
 subcategories:any
 shopid:any
value: any;
productForm!: FormGroup;
  constructor(private productservice:ProductserviceService,private formBuilder: FormBuilder,private tokenservice:TokenserviceService){}
  getSubCategory(){

  console.log(this.productForm.value.category)
  this.productservice.getSubcategoryByCategoryId(this.productForm.value.category).subscribe((res:any)=>{
    console.log(res)
    this.subcategories=res
  })
  }
  // Getters for form controls
  get productname() { return this.productForm.get('productname'); }
  get category() { return this.productForm.get('category'); }
  get subcategory() { return this.productForm.get('subcategory'); }
  get price() { return this.productForm.get('price'); }
  get stock() { return this.productForm.get('stock'); }
  get image() { return this.productForm.get('image'); }
  get description() { return this.productForm.get('description'); }
  get expiry_date() { return this.productForm.get('expiry_date'); }
  get discount_percentage() { return this.productForm.get('discount_percentage'); }

  onSubmit() {
    if (this.productForm.valid) {
      this.productForm.value.image=this.imageBase64
      this.productForm.value.availability="Available"
      this.productForm.value.shop=this.shopid
      console.log('Form Data: ', this.productForm.value);
      this.productservice.addProduct(this.productForm.value).subscribe((res:any)=>{
        console.log(res)
        alert("Product added successfully")
      })
    } else {
      console.log('Form Invalid');
    }
  }
  imageBase64: string | ArrayBuffer = '';

  onFileSelected(event: any) {
    const file:File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
      
    }
    
  }

  handleReaderLoaded(e: any) {
    this.imageBase64 = e.target.result;
    console.log(this.imageBase64)
    
  }
  ngOnInit() {

    let userid=this.tokenservice.getUser()._id
    console.log(userid)
    this.productservice.getShopId(userid).subscribe((res:any)=>{

      console.log(res)
      this.shopid=res._id
    })
    this.productForm = this.formBuilder.group({
      productname: ['', Validators.required],
      category: ['', Validators.required],
      subcategory: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      stock: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      image: ['', Validators.required],
      description: ['', Validators.required],
      expiry_date: ['', Validators.required],
      discount_percentage: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      shop:[],
      availability:[]
    });
    this.productservice.getAllCategory().subscribe((res:any)=>{
      console.log(res)
      this.categories=res
    })
  }
}
