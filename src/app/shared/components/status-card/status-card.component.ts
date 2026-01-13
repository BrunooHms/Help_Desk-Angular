import { Component, Input } from '@angular/core';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-status-card',
  imports: [MatIcon],
  templateUrl: './status-card.component.html',
  styleUrl: './status-card.component.scss'
})
export class StatusCardComponent {
    @Input() title! : string;
    @Input() value! : string | number;
    @Input() icon! : string;
    @Input() bgColor! : string 
}
