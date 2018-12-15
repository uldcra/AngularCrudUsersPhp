import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UploadService {

  public url="http://localhost/web/proyecto/";
  constructor(private http:HttpClient) { }

  uploadFiles(files:File){
    let headers=new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
   // headers.append('Content-Type','application/json');
    
    let formData:FormData = new FormData();
            formData.append('fileToUpload', files, files.name);
    console.log(files.name);
    return this.http.post(this.url+"upload.php",formData,{headers:headers}).pipe(map(data=>{
      return data;
    }));

  }
}
