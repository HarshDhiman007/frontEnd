import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule} from '@angular/router';
import { BlogsService} from '../../../services/blogs.service';

@Component({
  selector: 'app-card',

  templateUrl: './card.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  constructor(private _blogser: BlogsService, private activeRoute : ActivatedRoute) {}

  Blogs : any;
  BlogsId : any = 0;
  ngOnInit(): void {
    this.BlogsId = this.activeRoute.snapshot.params['id'];
    // this.Blogs = this._blogser.blogss.find((x) => x.id == this.BlogsId);
  }
  
}
