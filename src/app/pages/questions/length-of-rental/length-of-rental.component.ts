import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-length-of-rental',
  templateUrl: './length-of-rental.component.html',
  styleUrls: ['./length-of-rental.component.scss']
})
export class LengthOfRentalComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
