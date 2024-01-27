import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AddService } from '../../services/add.service';
import { BlogsService} from '../../services/blogs.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  constructor(private _blogser: BlogsService, private _addser: AddService) {}
  Blogs : any[] = [];

  ngOnInit(): void {
  }
  readlater(data){
    console.log(data)
    this._addser.addToReadLater(data);
    alert("Added to Favourite")
  }
 
}
