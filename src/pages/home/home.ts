import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { ToastController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';
import { Geolocation } from '@ionic-native/geolocation';
import { SMS } from '@ionic-native/sms';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [[Camera,Flashlight]]
})
export class HomePage {
  public options:any;
  public base64Image: string;
  
  public localisation:string;
  
  constructor(private sms: SMS, public navCtrl: NavController, private camera: Camera,public toastCtrl: ToastController,private flashlight: Flashlight,private geolocation: Geolocation) {

	
	this.geolocation.getCurrentPosition().then((resp) => {
	 this.localisation = 'Lat : '+resp.coords.latitude+' long :'+resp.coords.longitude;
	}).catch((error) => {
	  console.log('Error getting location', error);
	});
  }
	
  public takePicture(){
      this.options = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: true,
        correctOrientation: true,
        destinationType: this.camera.DestinationType.DATA_URL,
        mediaType: this.camera.MediaType.VIDEO
      }
      this.camera.getPicture(this.options)
        .then((imageData)=>{
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }).then((path) => {
			this.presentToast();
        })
    }
	
	presentToast() {
		let toast = this.toastCtrl.create({
		  message: 'Image enregistrée',
		  duration: 10000
		});
		toast.present();
	  }
	  
	allumer()
	{
		this.sms.send('0760534291', 'Hello world!');
		//this.flashlight.toggle();
	}
}
