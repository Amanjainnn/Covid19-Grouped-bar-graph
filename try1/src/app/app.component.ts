import { Component } from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'try1';
  image:any;
  imageToShow:any;
  constructor(private _demoService: DemoService) { }
  ngOnInit() {
    this.getImage();
  }
 
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }
  getImage() {
    
   this._demoService.getImage().subscribe(
      data => { this.createImageFromBlob(data)},
      err => console.error(err),
      () => console.log('done loading graph')
    );
  }
}
