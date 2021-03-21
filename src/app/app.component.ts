import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Alurapic";
  photos: any[] = [];

  constructor(private photoservice:PhotoService){  }

  ngOnInit():void{
    this.photoservice
    .listPhotosByUser('flavio')
    .subscribe(photos => this.photos = photos);
  }
}
