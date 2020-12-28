import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-estimated-prop-value',
  templateUrl: './estimated-prop-value.component.html',
  styleUrls: ['./estimated-prop-value.component.scss']
})
export class EstimatedPropValueComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
