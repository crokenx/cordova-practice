import { Component } from '@angular/core';

declare const window: any;
declare const navigator: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  alert: any;
  camera: any;
  deviceReady = false;
  Camera: any;

  constructor() {
     document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  }

  onDeviceReady() {
    this.deviceReady = true;
    this.alert = window.plugins.alertPlugin;
    console.log('window ', window);
    console.log('navigator ', navigator)
    this.camera = navigator.camera;
  }

  openCamera(){
    this.camera.getPicture(this.onSuccess, this.onFail, { quality: 50, destinationType: 1 });
  }

// navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
//     destinationType: Camera.DestinationType.FILE_URI });

  onSuccess(imageURI: string) {
    console.log('imageURI' + imageURI);
      // var image = document.getElementById('myImage');
      //image.src = imageURI;
  }

  onFail(message: string) {
      alert('Failed because: ' + message);
  }
}
