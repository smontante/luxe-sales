import { Component, OnInit } from '@angular/core';
import { BorrowerDataFlipServiceService } from '../../../services/borrower-data-flip-service.service';

@Component({
  selector: 'app-borrower-entity-flip',
  templateUrl: './borrower-entity-flip.component.html',
  styleUrls: ['./borrower-entity-flip.component.scss']
})
export class BorrowerEntityFlipComponent implements OnInit {

  constructor(public data:BorrowerDataFlipServiceService) { }

  ngOnInit(): void {
  }

}
