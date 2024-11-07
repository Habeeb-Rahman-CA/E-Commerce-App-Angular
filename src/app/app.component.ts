import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { APIResponse, ICustomer, IUser, IUserCart } from './model/interface/product';
import { FormsModule } from '@angular/forms';
import { MasterService } from './service/master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'e-commerce-app';

  registerObj: ICustomer = new ICustomer()
  loginObj: IUser = new IUser()
  loggedUserData: ICustomer = new ICustomer()
  userCartData:IUserCart[] = []

  isCartPopupOpen: boolean = false

  totalPrice: number = 0
  totalQuantity:number = 0

  masterService = inject(MasterService)

  @ViewChild('registerModal') registerModal: ElementRef | undefined
  @ViewChild('loginModal') loginModal: ElementRef | undefined

  ngOnInit(): void {
    const isUser = localStorage.getItem('token')
    if (isUser != null) {
      const parseObj = JSON.parse(isUser)
      this.loggedUserData = parseObj
      this.getCartItems()
    }
    this.masterService.onCartAdded.subscribe((res) =>{
      if (res) {
        this.getCartItems()
      }
    })
  }

  openRegisterModal() {
    if (this.registerModal)
      this.registerModal.nativeElement.style.display = "block"
  }

  closeRegisterModal() {
    if (this.registerModal)
      this.registerModal.nativeElement.style.display = "none"
  }

  openLoginModal() {
    if (this.loginModal)
      this.loginModal.nativeElement.style.display = "block"
  }

  closeLoginModal() {
    if (this.loginModal)
      this.loginModal.nativeElement.style.display = "none"
  }

  onRegister() {
    this.masterService.registerNewCustomer(this.registerObj).subscribe((res: APIResponse) => {
      if (res.message) {
        alert('User Registration successful!')
        this.closeRegisterModal()
      } else {
        alert(res.message)
      }
    })
  }

  onLogin() {
    this.masterService.loginUser(this.loginObj).subscribe((res: APIResponse) => {
      if (res.data) {
        alert('User login successful!')
        this.loggedUserData = res.data
        localStorage.setItem('token', JSON.stringify(res.data))
        this.closeLoginModal()
      } else {
        alert("login error")
      }
    })
  }

  logout(){
    localStorage.removeItem('token')
    this.loggedUserData = new ICustomer()
  }

  showCart(){
    this.isCartPopupOpen = !this.isCartPopupOpen
  }

  getCartItems(){
    this.masterService.getCartProductByCustomerId(this.loggedUserData.custId).subscribe((res:APIResponse) =>{
      this.userCartData = res.data
      this.totalPrice = this.userCartData.reduce((total, item) => total + item.productPrice, 0)
      this.totalQuantity = this.userCartData.reduce((total, item) => total + item.quantity, 0)
    })
  }

  onRemoveCartItem(id: number){
    this.masterService.deleteProductFromCartById(id).subscribe((res) => {
      if (res.result) {
        this.getCartItems()
      } else {
        alert(res.message)
      }
    })
  }
}
