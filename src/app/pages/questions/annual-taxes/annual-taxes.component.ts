import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-annual-taxes',
  templateUrl: './annual-taxes.component.html',
  styleUrls: ['./annual-taxes.component.scss']
})
export class AnnualTaxesComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
