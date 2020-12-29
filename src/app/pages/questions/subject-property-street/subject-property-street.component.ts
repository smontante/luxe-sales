import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-subject-property-street',
  templateUrl: './subject-property-street.component.html',
  styleUrls: ['./subject-property-street.component.scss']
})
export class SubjectPropertyStreetComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
