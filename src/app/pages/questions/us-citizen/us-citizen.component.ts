import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-us-citizen',
  templateUrl: './us-citizen.component.html',
  styleUrls: ['./us-citizen.component.scss']
})
export class UsCitizenComponent implements OnInit {
  
  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

  onItemSelector(value :any) {
    this.data.usCitizenCheck = value;
  }

}
