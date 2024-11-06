import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIResponse, ICart, ICategory, ICustomer, IProduct } from '../../model/interface/product';
import { CommonModule } from '@angular/common';
import { map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy {

  masterService = inject(MasterService)

  productList = signal<IProduct[]>([])

  categoryList$: Observable<ICategory[]> = new Observable<ICategory[]>()

  subscriptionList: Subscription[] = []

  loggedUserData: ICustomer = new ICustomer()

  constructor(){
    const isUser = localStorage.getItem('token')
    if (isUser != null) {
      const parseObj = JSON.parse(isUser)
      this.loggedUserData = parseObj
    }
  }

  ngOnInit(): void {
    this.getAllProduct()
    this.categoryList$ = this.masterService.getAllCategories().pipe(
      map(item => item.data)
    )
  }

  getAllProduct() {
    this.subscriptionList.push(this.masterService.getAllProducts().subscribe((res: APIResponse) => {
      this.productList.set(res.data)
    }))
  }

  getProductByCategory(id: number){
    this.subscriptionList.push(this.masterService.GetAllProductsByCategoryId(id).subscribe((res: APIResponse) => {
      this.productList.set(res.data)
    }))
  }

  onAddToCart(id: number){
    const newObj: ICart = new ICart()
    newObj.productId = id
    newObj.custId = this.loggedUserData.custId
    this.masterService.addToCart(newObj).subscribe((res:APIResponse) =>{
      if (res.result) {
        alert("Product Added to Cart")
      } else {
        alert(res.message)
      }
    })
  }

  //if we subscribe we also want to unsubsribe it
  ngOnDestroy(): void {
    this.subscriptionList.forEach(element => {
      element.unsubscribe()
    });
  }

}
