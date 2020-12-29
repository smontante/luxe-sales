import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-subj-property',
  templateUrl: './subj-property.component.html',
  styleUrls: ['./subj-property.component.scss']
})
export class SubjPropertyComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {

}

}
