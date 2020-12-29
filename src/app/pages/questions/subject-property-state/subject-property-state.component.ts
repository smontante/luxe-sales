import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-subject-property-state',
  templateUrl: './subject-property-state.component.html',
  styleUrls: ['./subject-property-state.component.scss']
})
export class SubjectPropertyStateComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
