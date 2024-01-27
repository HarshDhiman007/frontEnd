import { Injectable } from '@angular/core';
import { CardComponent } from '../component/dashboard/card/card.component';
import { BlogsService } from './blogs.service';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private blgs:BlogsService) { }
  read : any[] = [];
  comm :any[]=[];
  addToReadLater(data)
  {
    this.read.push(data)
    console.log(this.read)
  }
  addComments(info)
  {
    this.comm.push(info)
  }
}

