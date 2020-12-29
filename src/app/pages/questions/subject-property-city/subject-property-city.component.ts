import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-subject-property-city',
  templateUrl: './subject-property-city.component.html',
  styleUrls: ['./subject-property-city.component.scss']
})
export class SubjectPropertyCityComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
