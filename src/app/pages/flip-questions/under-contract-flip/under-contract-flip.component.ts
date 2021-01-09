import { Component, OnInit } from '@angular/core';
import { BorrowerDataFlipServiceService } from '../../../services/borrower-data-flip-service.service';

@Component({
  selector: 'app-under-contract-flip',
  templateUrl: './under-contract-flip.component.html',
  styleUrls: ['./under-contract-flip.component.scss']
})
export class UnderContractFlipComponent implements OnInit {

  constructor(public data:BorrowerDataFlipServiceService) { }

  ngOnInit(): void {
  }

  onItemSelector(value :any) {
    this.data.subjectPropertyUnderContractFlip = value;
  }

}
