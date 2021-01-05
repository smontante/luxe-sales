import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-borrowers-entity',
  templateUrl: './borrowers-entity.component.html',
  styleUrls: ['./borrowers-entity.component.scss']
})
export class BorrowersEntityComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
