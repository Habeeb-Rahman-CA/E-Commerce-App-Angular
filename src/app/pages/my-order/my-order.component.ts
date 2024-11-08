import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIResponse, IPlaceOrder } from '../../model/interface/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-order.component.html',
  styleUrl: './my-order.component.css'
})
export class MyOrderComponent implements OnInit {

  masterService = inject(MasterService)

  salesList: IPlaceOrder[] =[]

  ngOnInit(): void {
    this.getAllSalesByCustomerId(this.masterService.loggedUserData.custId)
  }

  getAllSalesByCustomerId(id: number) {
    this.masterService.getAllSaleByCustomerId(id).subscribe((res: APIResponse) => {
      this.salesList = res.data
    })
  }

}
