import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatAnchor, MatIconAnchor } from "@angular/material/button";


@Component({
  selector: 'app-sidebar-c',
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatAnchor,
    MatIconAnchor
],
  templateUrl: './sidebar-c.component.html',
  styleUrl: './sidebar-c.component.scss'
})
export class SidebarCComponent {

}
