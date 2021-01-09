import { Component, OnInit } from '@angular/core';
import { BorrowerDataFlipServiceService } from '../../../services/borrower-data-flip-service.service';

@Component({
  selector: 'app-subject-property-city-flip',
  templateUrl: './subject-property-city-flip.component.html',
  styleUrls: ['./subject-property-city-flip.component.scss']
})
export class SubjectPropertyCityFlipComponent implements OnInit {

  constructor(public data:BorrowerDataFlipServiceService) { }

  ngOnInit(): void {
  }

}
