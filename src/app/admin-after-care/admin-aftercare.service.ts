import { ElementRef, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { environment } from '../../environments/environment';

@Injectable({
        providedIn: 'root'
})

export class AdminAfterCareService{
        private urlAPI = `${environment.apiUrl}admin-aftercare`;


        constructor(private http: HttpClient, private toastr: ToastrService){}

        getData(): Observable<any>{
                return this.http.get<any>(this.urlAPI);
        }

        updateData(data:any): Observable<any>{
                const _id = data._id;
                const json = {
                        title: data.title,
                        box_1: data.box_1,
                        box_2: data.box_2,
                        box_3: data.box_3,
                        box_4: data.box_4,
                        box_5: data.box_5,
                        box_6: data.box_6,
                        discussions: data.discussions
                }
                return this.http.put<any>(`${this.urlAPI}/${_id}`, json);
        }

        uploadImage1(image: FormData, fileInput: ElementRef): void {

                this.http.post(`${environment.apiUrl}upload1`, image, { responseType: 'text' as 'json' }).subscribe(
                        (response) => {
                                // Toastr here
                                this.toastr.success('File uploaded successfully. Refresh to see changes');
                                fileInput.nativeElement.value = '';
                        }, (error) => {
                                // Toastr here
                                this.toastr.error('An error occurred' + error.error);
                        }
                )
        }

        uploadImage2(image: FormData, fileInput: ElementRef): void {
                this.http.post(`${environment.apiUrl}upload2`, image, { responseType: 'text' as 'json' }).subscribe(
                        (response) => {
                                // Toastr here
                                this.toastr.success('File uploaded successfully. Refresh to see changes');
                                fileInput.nativeElement.value = '';
                        }, (error) => {
                                // Toastr here
                                this.toastr.error('An error occurred');
                        }
                )
        }

}