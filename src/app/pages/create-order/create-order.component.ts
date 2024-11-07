import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIResponse, IPlaceOrder, IUserCart } from '../../model/interface/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css'
})
export class CreateOrderComponent implements OnInit {

  userCart: IUserCart[] = []

  totalPrice: number = 0

  masterService = inject(MasterService)

  orderObj: IPlaceOrder = new IPlaceOrder()

  ngOnInit(): void {
    this.getUserCart()
  }

  getUserCart() {
    this.masterService.getCartProductByCustomerId(this.masterService.loggedUserData.custId).subscribe((res: APIResponse) => {
      this.userCart = res.data
      this.totalPrice = this.userCart.reduce((total, item) => total + item.productPrice, 0)
    })
  }

  placeOrder(){
    this.orderObj.custId = this.masterService.loggedUserData.custId
    this.orderObj.totalInvoiceAmount = this.totalPrice
    this.masterService.placeOrder(this.orderObj).subscribe((res: APIResponse) =>{
      if (res.result) {
        alert('Your order placed successfully')
        this.getUserCart()
        this.orderObj = new IPlaceOrder()
      } else {
        alert(res.message)
      }
    })
  }

}
