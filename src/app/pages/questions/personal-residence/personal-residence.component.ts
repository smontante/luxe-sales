import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-personal-residence',
  templateUrl: './personal-residence.component.html',
  styleUrls: ['./personal-residence.component.scss']
})
export class PersonalResidenceComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

  onItemSelector(value :any) {
    this.data.ownPersonalResidence = value;
  }


}
