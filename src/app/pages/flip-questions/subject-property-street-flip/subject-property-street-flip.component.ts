import { Component, OnInit } from '@angular/core';
import { BorrowerDataFlipServiceService } from '../../../services/borrower-data-flip-service.service';

@Component({
  selector: 'app-subject-property-street-flip',
  templateUrl: './subject-property-street-flip.component.html',
  styleUrls: ['./subject-property-street-flip.component.scss']
})
export class SubjectPropertyStreetFlipComponent implements OnInit {

  constructor(public data:BorrowerDataFlipServiceService) { }

  ngOnInit(): void {
  }

}
