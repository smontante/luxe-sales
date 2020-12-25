import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-annual-hoa-fees',
  templateUrl: './annual-hoa-fees.component.html',
  styleUrls: ['./annual-hoa-fees.component.scss']
})
export class AnnualHoaFeesComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
