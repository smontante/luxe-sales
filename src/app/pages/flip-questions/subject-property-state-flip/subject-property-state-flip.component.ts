import { Component, OnInit } from '@angular/core';
import { BorrowerDataFlipServiceService } from '../../../services/borrower-data-flip-service.service';

@Component({
  selector: 'app-subject-property-state-flip',
  templateUrl: './subject-property-state-flip.component.html',
  styleUrls: ['./subject-property-state-flip.component.scss']
})
export class SubjectPropertyStateFlipComponent implements OnInit {

  constructor(public data:BorrowerDataFlipServiceService) { }

  ngOnInit(): void {
  }

}
