import { Injectable } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytes,
  list,
  getDownloadURL,
  listAll,
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
    const carpetaNueva = Date.now().toString(); // Generar un nombre de carpeta único usando el timestamp actual
    const imgRef = ref(this.storage, `proyectoImg/` + carpetaNueva + '/' + name); // Incluir el nombre de carpeta en la ruta de la imagen
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
        for (let item of response.prefixes) { // Usar response.prefixes para obtener las carpetas en lugar de response.items
          const items = await listAll(item); // Obtener los items (imágenes) dentro de cada carpeta
          for (let imageItem of items.items) {
            this.url = await getDownloadURL(imageItem);
            console.log('La URL es: ' + this.url);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
