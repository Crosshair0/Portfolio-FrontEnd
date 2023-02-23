import { Injectable } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytes,
  list,
  getDownloadURL,
} from '@angular/fire/storage';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  url: string = '';
  constructor(private storage: Storage) {}

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagen/` + name);
    uploadBytes(imgRef, file)
      .then((response) => {
        this.getImages();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getImages() {
    const imagesRef = ref(this.storage, 'imagen');
    list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log('La URL es: ' + this.url);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  public ProyectoImg($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `proyectoImg/` + name);
    uploadBytes(imgRef, file)
      .then((response) => {
        this.getProyectoImg();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getProyectoImg() {
    const imagesRef = ref(this.storage, 'proyectoImg');
    list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log('La URL es: ' + this.url);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
