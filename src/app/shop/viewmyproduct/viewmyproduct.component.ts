import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewmyproduct',
  templateUrl: './viewmyproduct.component.html',
  styleUrls: ['./viewmyproduct.component.css']
})
export class ViewmyproductComponent {
  id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('productid');
    console.log(this.id)
  }
}
