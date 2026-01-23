import { Component, Input } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-card',
  imports: [MatIcon, CommonModule],
  templateUrl: './status-card.component.html',
  styleUrl: './status-card.component.scss'
})
export class StatusCardComponent {
    @Input() title! : string;
    @Input() value! : string | number;
    @Input() icon! : string;
    @Input() status! : 'open' | 'progress' | 'done' | 'late';

    get statusClass() {
      return {
        'bg-open': this.status === 'open',
        'bg-progress': this.status === 'progress',
        'bg-done': this.status === 'done',
        'bg-late': this.status === 'late',
      };
    }
}
