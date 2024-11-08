import { Component, inject } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.css'
})
export class OrderSuccessComponent {

  masterService = inject(MasterService)

  loggedUser:string = this.masterService.loggedUserData.name
}
