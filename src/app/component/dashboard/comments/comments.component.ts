import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AddService } from '../../../services/add.service';
import { BlogsService } from '../../../services/blogs.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit{
  demo:string
  constructor(private _blogser: BlogsService, private activeRoute : ActivatedRoute,private addser :AddService) {}
  getComments(temp:string)
  {
    return this.demo=temp; 
  }
  addComment(temo:string)
  {
    this.addser.addComments(this.demo);
  }
  i:number=1
  inc()
  {
    this.i++;
  }
  comm: any[] = [];
  Blogs : any;
  BlogsId : any = 0;
  ngOnInit(): void {
    this.BlogsId = this.activeRoute.snapshot.params['id'];
    // this.Blogs = this._blogser.blogss.find((x) => x.id == this.BlogsId);
    this.comm = this.addser.comm;

  }
}
