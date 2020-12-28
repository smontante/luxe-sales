import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-rehab-costs',
  templateUrl: './rehab-costs.component.html',
  styleUrls: ['./rehab-costs.component.scss']
})
export class RehabCostsComponent implements OnInit {

  constructor(public data: BorrowerDataService) { }

  ngOnInit(): void {
  }

}
