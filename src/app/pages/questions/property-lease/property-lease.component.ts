import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-property-lease',
  templateUrl: './property-lease.component.html',
  styleUrls: ['./property-lease.component.scss']
})
export class PropertyLeaseComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

  onItemSelector(value :any) {
    this.data.leaseInfo = value;
  }

}
