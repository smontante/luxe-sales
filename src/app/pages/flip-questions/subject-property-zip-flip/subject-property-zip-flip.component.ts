import { Component, OnInit } from '@angular/core';
import { BorrowerDataFlipServiceService } from '../../../services/borrower-data-flip-service.service';

@Component({
  selector: 'app-subject-property-zip-flip',
  templateUrl: './subject-property-zip-flip.component.html',
  styleUrls: ['./subject-property-zip-flip.component.scss']
})
export class SubjectPropertyZipFlipComponent implements OnInit {

  constructor(public data:BorrowerDataFlipServiceService) { }

  ngOnInit(): void {
  }

}
