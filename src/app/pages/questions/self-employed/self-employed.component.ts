import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-self-employed',
  templateUrl: './self-employed.component.html',
  styleUrls: ['./self-employed.component.scss']
})
export class SelfEmployedComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

  onItemSelector(value :any) {
    this.data.selfEmployed = value;
  }

}
