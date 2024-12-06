import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    const params: Params = this.route.snapshot.params
    const id = Number(params['id'])
    console.log(id);
  }
}
