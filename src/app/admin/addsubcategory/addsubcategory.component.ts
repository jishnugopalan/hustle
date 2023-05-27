import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.css']
})
export class AddsubcategoryComponent {
  categoryForm!: FormGroup;
  cat:any
  constructor(private formBuilder: FormBuilder,private adminservice:AdminserviceService,private productservice:ProductserviceService) {
    this.createForm();
  }

  createForm() {
    this.categoryForm = this.formBuilder.group({
      categoryid: ['', Validators.required],
      subcategory:['',Validators.required]
    });
  }
  onSubmit(){
    console.log(this.categoryForm.value)
   
    this.adminservice.addSubcategory(this.categoryForm.value).subscribe((res:any)=>{
      console.log(res)
      alert("Subcategory added successfully")
    })
  }
  ngOnInit() {
    this.productservice.getAllCategory().subscribe((res:any)=>{
      console.log(res)
      this.cat=res
    })
  }
}
