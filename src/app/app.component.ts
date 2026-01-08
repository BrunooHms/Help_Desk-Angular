import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/layout/header/header/header.component";
import { SidebarCComponent } from "./core/layout/sidebar/sidebar-c/sidebar-c.component";
import { MainLayoutComponent } from "./core/layout/main-layout/main-layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SidebarCComponent, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'helpdesk';
}
