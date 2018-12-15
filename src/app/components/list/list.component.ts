import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Car } from 'src/app/models/intetrgfaceCars';
import { UploadService } from 'src/app/services/upload.service';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[MessageService]
})
export class ListComponent implements OnInit {

    public msgs: Message[] = [];
    cars: Car[];

    cols: any[];

    brands: SelectItem[];

    colors: SelectItem[];

    yearFilter: number;

    yearTimeout: any;

    constructor(private _uploadService:UploadService,private messageService: MessageService) { }

    public uploadedFiles:any[]=[];
    ngOnInit() {
        
       this.cars =[
         {
          vin:"a1653d4d",	
          year:1998	,
          brand:"VW",
          color:"White"
         },
         {
          vin:"ddeb9b10",
          year:	1985,
          brand:"Mercedes",
          color:"Green"
         }
       ];

        this.brands = [
            { label: 'All Brands', value: null },
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];

        this.colors = [
            { label: 'White', value: 'White' },
            { label: 'Green', value: 'Green' },
            { label: 'Silver', value: 'Silver' },
            { label: 'Black', value: 'Black' },
            { label: 'Red', value: 'Red' },
            { label: 'Maroon', value: 'Maroon' },
            { label: 'Brown', value: 'Brown' },
            { label: 'Orange', value: 'Orange' },
            { label: 'Blue', value: 'Blue' }
        ];

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }

    onYearChange(event, dt) {
        if (this.yearTimeout) {
            clearTimeout(this.yearTimeout);
        }

        this.yearTimeout = setTimeout(() => {
            dt.filter(event.value, 'year', 'gt');
        }, 250);
    }
    onBasicUpload(event){
       
        console.log(event.files);
        
        let fileList: FileList = event.files;
       
        if(fileList.length > 0) {
            let file: File = fileList[0];
            
            //let ext=file.name.split('.').pop();
            let numb=file.name.lastIndexOf(".");
            let subExt=file.name.substring(numb);
            console.log("ext ",subExt);
            if(subExt==".csv"||subExt==".png"){
                let formData:FormData = new FormData();
                formData.append('uploadFile', file, file.name);
                
                this._uploadService.uploadFiles(file).subscribe(res=>{
                    console.log("desde subscribe",res);
                },
                error=>{
                    console.error("Error",error);
                }
                );
            }else{
                this.showError();
                console.error("Formato incorrecto")
            }
            
        }
       
    }
    showError() {
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Formato no permitido', detail:'Validation failed'});
    }
    showViaService() {
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    }
}
