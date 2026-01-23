import { Component } from '@angular/core';
import { StatusCardComponent } from "../../shared/components/status-card/status-card.component";
import { TicketsTableComponent } from "../../shared/components/tickets-table/tickets-table.component";



@Component({
  selector: 'app-dashboard',
  imports: [StatusCardComponent, TicketsTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
