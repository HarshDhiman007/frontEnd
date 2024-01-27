import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { blogger } from '../../../model/blogger/blogger';
import { BlogsService } from '../../../services/blogs.service';

@Component({
  selector: 'app-blogs-module',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,RouterOutlet],
  templateUrl: './blogs-module.component.html',
  styleUrl: './blogs-module.component.css'
})
export class BlogsModuleComponent implements OnInit{
  blog=new blogger(0,"","","","","","")
  file:any
  ngOnInit(){

  }
  constructor(private serv:BlogsService){

  }
  num=1
  onChangeFileField(event:any)
  {
    this.file=event.target.files[0]
    this.num++
    this.blog.id=this.num;
    this.blog.imgName=this.file.name;
    console.log(this.file);
  }
  addBlog()
  {
    this.serv.postUserData(this.blog,this.file).subscribe({
      next:(response)=>{
        console.log(response)
        alert("done")
      },
      error:(error)=>{
        console.log(error)
        alert("error")
      },
      complete:()=>{
        console.log("request is completed");
      }
    })

  }
}
