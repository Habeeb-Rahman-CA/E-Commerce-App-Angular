import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIResponse, IProduct } from '../../model/interface/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  masterService = inject(MasterService)

  productList = signal<IProduct[]>([])

  ngOnInit(): void {
    this.getAllProduct()
  }

  getAllProduct() {
    this.masterService.getAllProducts().subscribe((res: APIResponse) => {
      this.productList.set(res.data)
    })
  }

}
