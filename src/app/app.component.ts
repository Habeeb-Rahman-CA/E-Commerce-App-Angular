import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APIResponse, ICustomer, IUser } from './model/interface/product';
import { FormsModule } from '@angular/forms';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce-app';

  registerObj: ICustomer = new ICustomer()
  loginObj: IUser = new IUser()

  masterService = inject(MasterService)

  @ViewChild('registerModal') registerModal: ElementRef | undefined
  @ViewChild('loginModal') loginModal: ElementRef | undefined

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
        localStorage.setItem('token', JSON.stringify(res.data))
        this.closeLoginModal()
      } else {
        alert(res.data)
      }
    })
  }
}
