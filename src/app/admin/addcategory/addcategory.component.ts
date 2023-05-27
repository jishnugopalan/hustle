import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {

  categoryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private adminservice:AdminserviceService) {
    this.createForm();
  }

  createForm() {
    this.categoryForm = this.formBuilder.group({
      category: ['', Validators.required]
    });
  }
  onSubmit(){
    console.log(this.categoryForm.value)
    this.adminservice.addCategory(this.categoryForm.value).subscribe((res:any)=>{
      console.log(res)
      alert("Category added successfully")
    })
  }
}
