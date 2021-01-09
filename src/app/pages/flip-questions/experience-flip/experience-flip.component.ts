import { Component, OnInit } from '@angular/core';
import { BorrowerDataFlipServiceService } from '../../../services/borrower-data-flip-service.service';

@Component({
  selector: 'app-experience-flip',
  templateUrl: './experience-flip.component.html',
  styleUrls: ['./experience-flip.component.scss']
})
export class ExperienceFlipComponent implements OnInit {

  constructor(public data:BorrowerDataFlipServiceService) { }

  ngOnInit(): void {
  }

}
