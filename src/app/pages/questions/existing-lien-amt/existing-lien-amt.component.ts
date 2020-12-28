import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-existing-lien-amt',
  templateUrl: './existing-lien-amt.component.html',
  styleUrls: ['./existing-lien-amt.component.scss']
})
export class ExistingLienAmtComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
