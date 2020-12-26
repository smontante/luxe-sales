import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from 'src/app/services/borrower-data.service';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.scss']
})
export class SubmittedComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
