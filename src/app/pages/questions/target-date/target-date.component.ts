import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-target-date',
  templateUrl: './target-date.component.html',
  styleUrls: ['./target-date.component.scss']
})
export class TargetDateComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
