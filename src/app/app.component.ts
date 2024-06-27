import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIconButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatIcon, MatSidenavContainer,
    MatSidenav, MatNavList, MatListItem, RouterLink, MatSidenavContent, MatIconButton, NgOptimizedImage],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'superpecas-front';
}
