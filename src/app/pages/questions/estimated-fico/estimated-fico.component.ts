import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-estimated-fico',
  templateUrl: './estimated-fico.component.html',
  styleUrls: ['./estimated-fico.component.scss']
})
export class EstimatedFicoComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
