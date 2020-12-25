import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-type-of-business',
  templateUrl: './type-of-business.component.html',
  styleUrls: ['./type-of-business.component.scss']
})
export class TypeOfBusinessComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
