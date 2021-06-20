import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../_services/city.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data:any;
  searchQuery = '';
  searchForm: FormGroup;
  
  constructor(private cityService: CityService,private route: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({

      searchBox:['',Validators.required]
    })
  }

  public get getControl() { return this.searchForm.controls; }

  search()
  {
    if(this.searchForm.invalid){
      this.searchForm.markAllAsTouched();
      return;
    }
     this.searchQuery = this.getControl.searchBox.value;

     if(this.searchQuery != ''){
       this.getResponse(this.searchQuery);
       this.searchForm.reset();
    }
    else{
       this.route.navigate(['/home']);
    }
  }

  getResponse(value: string)
  {
    this.cityService.getByCity(value).subscribe(responseData =>{
      this.data = responseData;
      console.log(this.data);
    }, error =>{
      console.log(error);
    });
  }
}
