import { Component } from '@angular/core';
import { TicketsTableComponent } from "../../shared/components/tickets-table/tickets-table.component";

@Component({
  selector: 'app-tickets',
  imports: [TicketsTableComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {

}
