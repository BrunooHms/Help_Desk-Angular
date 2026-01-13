import { Component } from '@angular/core';
import { StatusCardComponent } from "../../shared/components/status-card/status-card.component";



@Component({
  selector: 'app-dashboard',
  imports: [StatusCardComponent,
            ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
