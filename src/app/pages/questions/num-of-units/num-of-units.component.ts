import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-num-of-units',
  templateUrl: './num-of-units.component.html',
  styleUrls: ['./num-of-units.component.scss']
})
export class NumOfUnitsComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
