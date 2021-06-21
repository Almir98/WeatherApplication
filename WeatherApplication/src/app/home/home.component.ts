import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../_services/city.service';
import { CommunicationService } from '../_services/communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data:any;
  searchQuery = '';
  searchForm: FormGroup;
  dateTime = Date.now();
  inputValue: any;

  constructor(private route: Router, private fb: FormBuilder, private communicationService: CommunicationService) { }

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
     this.searchForm.reset();

     this.communicationService.sendMessage(this.searchQuery);
     this.route.navigate(['/city-details']);
  }

  
}
