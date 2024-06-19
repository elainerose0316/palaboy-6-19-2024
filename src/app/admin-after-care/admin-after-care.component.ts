import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminAfterCareService } from './admin-aftercare.service';

import { ToastrService } from 'ngx-toastr';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-admin-after-care',
  templateUrl: './admin-after-care.component.html',
  styleUrls: ['./admin-after-care.component.css']
})
export class AdminAfterCareComponent implements OnInit {
  aftercare: any;

  titlePage = "Admin: After Care";

  title: string[] = [];
  box_1: string[] = [];
  box_2: string[] = [];
  box_3: string[] = [];
  box_4: string[] = [];
  box_5: string[] = [];
  box_6: string[] = [];
  discussions: string[] = [];

  isThereAnyChanges: boolean = false;

  @ViewChild('fileInput1') fileInput1!: ElementRef;
  selectedFile1!: File;
  @ViewChild('fileInput2') fileInput2!: ElementRef;
  selectedFile2!: File;


  constructor(private http: HttpClient,
    private titleService: Title,
    private AdminAfterCareService: AdminAfterCareService,
    private router: Router,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer){}

  
  arrayPusher(refArray: string[], size: number, property: string){
    for(let i = 0; i < size; i++){
      const propertyName = property;
      refArray.push(this.aftercare[0][propertyName][i]);
    }
  }

  getData(): void{
    this.AdminAfterCareService.getData().subscribe(incoming_data => {
      this.aftercare = incoming_data;

      this.arrayPusher(this.title, 4, "title");

      // Box 1
      this.arrayPusher(this.box_1, 2, "box_1");

      // Box 2
      this.arrayPusher(this.box_2, 2, "box_2");

      // Box 3
      this.arrayPusher(this.box_3, 2, "box_3");

      // Box 4
      this.arrayPusher(this.box_4, 2, "box_4");

      // Box 5
      this.arrayPusher(this.box_5, 2, "box_5");

      // Box 6
      this.arrayPusher(this.box_6, 2, "box_6");

      // After care
      this.arrayPusher(this.discussions, 10, "discussions");
    })
  }

  updateData(): void{
    if(this.isAnyChanges()){

      const XSS: string [] = ["<script>", "</script>", "<img>", "</img", "<iframe>", "</iframe>", "onload", "onerror"]
      
      const contentTitle: string [] = [
        this.aftercare[0].title[0], 
        this.aftercare[0].title[1], 
        this.aftercare[0].title[2], 
        this.aftercare[0].title[3]];

      const contentBox1: string [] = [
        this.aftercare[0].box_1[0], 
        this.aftercare[0].box_1[1]];
        
      const contentBox2: string [] = [
        this.aftercare[0].box_2[0], 
        this.aftercare[0].box_2[1]];

      const contentBox3: string [] = [
        this.aftercare[0].box_3[0], 
        this.aftercare[0].box_3[1]];

      const contentBox4: string [] = [
        this.aftercare[0].box_4[0], 
        this.aftercare[0].box_4[1]];

      const contentBox5: string [] = [
        this.aftercare[0].box_5[0], 
        this.aftercare[0].box_5[1]];

      const contentBox6: string [] = [
        this.aftercare[0].box_6[0], 
        this.aftercare[0].box_6[1]];

      const contentDiscussions: string [] = [
        this.aftercare[0].discussions[0], 
        this.aftercare[0].discussions[1],
        this.aftercare[0].discussions[2], 
        this.aftercare[0].discussions[3],
        this.aftercare[0].discussions[4], 
        this.aftercare[0].discussions[5],
        this.aftercare[0].discussions[6], 
        this.aftercare[0].discussions[7],
        this.aftercare[0].discussions[8], 
        this.aftercare[0].discussions[9],
      ];

      for(const title of contentTitle){
        for(const xss of XSS){
          if(title.includes(xss)){
            this.toastr.error('Unsafe content detected. Cannot save.');
            return;
          }
          if(title.trim() === ""){
            this.toastr.error('Empty content. Cannot save.');
            return;
          }
        }
      }

      for(const box of contentBox1){
        for(const xss of XSS){
          if(box.includes(xss)){
            this.toastr.error('Unsafe content detected. Cannot save.');
            return;
          }
          if(box.trim() === ""){
            this.toastr.error('Empty content. Cannot save.');
            return;
          }
        }
      }

      for(const box of contentBox2){
        for(const xss of XSS){
          if(box.includes(xss)){
            this.toastr.error('Unsafe content detected. Cannot save.');
            return;
          }
          if(box.trim() === ""){
            this.toastr.error('Empty content. Cannot save.');
            return;
          }
        }
      }

      for(const box of contentBox3){
        for(const xss of XSS){
          if(box.includes(xss)){
            this.toastr.error('Unsafe content detected. Cannot save.');
            return;
          }
          if(box.trim() === ""){
            this.toastr.error('Empty content. Cannot save.');
            return;
          }
        }
      }

      for(const box of contentBox4){
        for(const xss of XSS){
          if(box.includes(xss)){
            this.toastr.error('Unsafe content detected. Cannot save.');
            return;
          }
          if(box.trim() === ""){
            this.toastr.error('Empty content. Cannot save.');
            return;
          }
        }
      }

      for(const box of contentBox5){
        for(const xss of XSS){
          if(box.includes(xss)){
            this.toastr.error('Unsafe content detected. Cannot save.');
            return;
          }
          if(box.trim() === ""){
            this.toastr.error('Empty content. Cannot save.');
            return;
          }
        }
      }

      for(const box of contentBox6){
        for(const xss of XSS){
          if(box.includes(xss)){
            this.toastr.error('Unsafe content detected. Cannot save.');
            return;
          }
          if(box.trim() === ""){
            this.toastr.error('Empty content. Cannot save.');
            return;
          }
        }
      }

      for(const discussions of contentDiscussions){
        for(const xss of XSS){
          if(discussions.includes(xss)){
            this.toastr.error('Unsafe content detected. Cannot save.');
            return;
          }
          if(discussions.trim() === ""){
            this.toastr.error('Empty content. Cannot save.');
            return;
          }
        }
      }
        
        this.AdminAfterCareService.updateData(this.aftercare[0]).subscribe(updatedData =>{
        this.router.navigate(['/admin-aftercare']);

        this.toastr.success('Saved success');
      }, (err) =>{
        this.toastr.error("Error updating");
        console.log(err);
      })
      this.isThereAnyChanges = false;
      
      
    }else{
      this.toastr.info("No changes were made");
    }
  }

  isAnyChanges(){
    return this.isThereAnyChanges;
  }
  ngOnInit(): void {
      this.getData();

      this.titleService.setTitle(this.titlePage);
  }

  editing_title: boolean [] = [false, false, false, false];

  editing_box_1: boolean [] = [false, false];

  editing_box_2: boolean [] = [false, false];

  editing_box_3: boolean [] = [false, false];

  editing_box_4: boolean [] = [false, false];

  editing_box_5: boolean [] = [false, false];

  editing_box_6: boolean [] = [false, false];

  editing_discussions: boolean [] = [false, false, false, false, false, false, false, false, false, false];

  // Title Edit
  startEditingTitle(index: number){
    this.editing_title[index] = true;
  }
  finishEditingTitle(index: number, event: any){
    this.editing_title[index] = false;
    this.title[index] = event.target.value;
  }

  // Box 1 Edit
  startEditingBox1(index: number){
    this.editing_box_1[index] = true;
  }
  finishEditingBox1(index: number, event: any){
    this.editing_box_1[index] = false;
    this.box_1[index] = event.target.value;
  }

  // Box 2 Edit
  startEditingBox2(index: number){
    this.editing_box_2[index] = true;
  }
  finishEditingBox2(index: number, event: any){
    this.editing_box_2[index] = false;
    this.box_2[index] = event.target.value;
  }

  // Box 3 Edit
  startEditingBox3(index: number){
    this.editing_box_3[index] = true;
  }
  finishEditingBox3(index: number, event: any){
    this.editing_box_3[index] = false;
    this.box_3[index] = event.target.value;
  }

  // Box 4 Edit
  startEditingBox4(index: number){
    this.editing_box_4[index] = true;
  }
  finishEditingBox4(index: number, event: any){
    this.editing_box_4[index] = false;
    this.box_4[index] = event.target.value;
  }

  // Box 5 Edit
  startEditingBox5(index: number){
    this.editing_box_5[index] = true;
  }
  finishEditingBox5(index: number, event: any){
    this.editing_box_5[index] = false;
    this.box_5[index] = event.target.value;
  }

  // Box 6 Edit
  startEditingBox6(index: number){
    this.editing_box_6[index] = true;
  }
  finishEditingBox6(index: number, event: any){
    this.editing_box_6[index] = false;
    this.box_6[index] = event.target.value;
  }

  // Box 6 Edit
  startEditingDiscussions(index: number){
    this.editing_discussions[index] = true;
  }
  finishEditingDiscussions(index: number, event: any){
    this.editing_discussions[index] = false;
    this.discussions[index] = event.target.value;
  }

  doesChange(){
    this.isThereAnyChanges = true;
  }

  fileSelected1(event: any): void{
    this.selectedFile1 = event.target.files[0];
  }

  onFileSelected1(event: Event): void{

    if(!this.selectedFile1){
      this.toastr.warning('No file selected');
      return;
    }

    const maxSize = 1024 * 1024; // 1mb
    if(this.selectedFile1.size > maxSize){
      this.toastr.warning('File size should not exceed 1mb');
      return;
    }

    // Limit the resolution
    const reader = new FileReader();
    reader.onload = (e: any)=>{
      const image = new Image();
      image.onload = () =>{
        const MAX_WIDTH = 675;
        const MAX_HEIGHT = 1033;
        let width = image.width;
        let height = image.height;

        if(width > MAX_WIDTH || height > MAX_HEIGHT){
          this.toastr.warning('Image dimension should not exceed ' + MAX_WIDTH + 'x' + MAX_HEIGHT);
          return;
        }

        const formData = new FormData();
        formData.append('image', this.selectedFile1);
    
        this.AdminAfterCareService.uploadImage1(formData, this.fileInput1);
      };
      image.src = e.target.result;
    };
    reader.readAsDataURL(this.selectedFile1);

  }

  fileSelected2(event: any): void{
    this.selectedFile2 = event.target.files[0];
  }

  onFileSelected2(event: Event): void{

    if(!this.selectedFile2){
      this.toastr.warning('No file selected');
      return;
    }

    const maxSize = 1024 * 1024; // 1mb 
      if(this.selectedFile2.size > maxSize){
        this.toastr.warning('File size should not exceed 1mb');
        return;
    }

    // Limit the resolution
    const reader = new FileReader();
    reader.onload = (e: any)=>{
      const image = new Image();
      image.onload = () =>{
        const MAX_WIDTH = 1728;
        const MAX_HEIGHT = 2665;
        let width = image.width;
        let height = image.height;

        if(width > MAX_WIDTH || height > MAX_HEIGHT){
          this.toastr.warning('Image dimension should not exceed ' + MAX_WIDTH + 'x' + MAX_HEIGHT);
          return;
        }
       
        const formData = new FormData();
        formData.append('image', this.selectedFile2);

        this.AdminAfterCareService.uploadImage2(formData, this.fileInput2)
      };
      image.src = e.target.result;
    };
    reader.readAsDataURL(this.selectedFile2);
    
  }

  getSanitizedTitle(index: number): SafeHtml{
    const content = this.title[index];
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  getSanitizedBox1(index: number): SafeHtml{
    const Box = this.box_1[index];
    return this.sanitizer.bypassSecurityTrustHtml(Box);
  }

  getSanitizedBox2(index: number): SafeHtml{
    const Box = this.box_2[index];
    return this.sanitizer.bypassSecurityTrustHtml(Box);
  }

  getSanitizedBox3(index: number): SafeHtml{
    const Box = this.box_3[index];
    return this.sanitizer.bypassSecurityTrustHtml(Box);
  }

  getSanitizedBox4(index: number): SafeHtml{
    const Box = this.box_4[index];
    return this.sanitizer.bypassSecurityTrustHtml(Box);
  }

  getSanitizedBox5(index: number): SafeHtml{
    const Box = this.box_5[index];
    return this.sanitizer.bypassSecurityTrustHtml(Box);
  }

  getSanitizedBox6(index: number): SafeHtml{
    const Box = this.box_6[index];
    return this.sanitizer.bypassSecurityTrustHtml(Box);
  }

  getSanitizedDiscussions(index: number): SafeHtml{
    const Discussions = this.discussions[index];
    return this.sanitizer.bypassSecurityTrustHtml(Discussions);
  }
}
