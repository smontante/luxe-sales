import { Component, OnInit } from '@angular/core';
import { BorrowerDataFlipServiceService } from '../../../services/borrower-data-flip-service.service';

@Component({
  selector: 'app-estimated-fico-flip',
  templateUrl: './estimated-fico-flip.component.html',
  styleUrls: ['./estimated-fico-flip.component.scss']
})
export class EstimatedFicoFlipComponent implements OnInit {

  constructor(public data:BorrowerDataFlipServiceService) { }

  ngOnInit(): void {
  }

}
