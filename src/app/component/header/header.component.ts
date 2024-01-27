import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddService } from '../../services/add.service';
import { AuthServService } from '../../services/auth.service';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private _blogser: BlogsService, private _addser: AddService,private temp:AuthServService) {}
  isVisible = false;
  toggleVisibility() {
    this.isVisible = !this.isVisible;

  }
  toggleVis() {
    this.isVisible = false;
    this.temp.logout();
  }

  

}
