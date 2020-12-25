import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-mortgage-lates',
  templateUrl: './mortgage-lates.component.html',
  styleUrls: ['./mortgage-lates.component.scss']
})
export class MortgageLatesComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

  onItemSelector(value :any) {
    this.data.mortgageLates = value;
  }

}
