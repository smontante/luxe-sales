import { Component, OnInit } from '@angular/core';
import { BorrowerDataService } from '../../../services/borrower-data.service';

@Component({
  selector: 'app-subject-property-zip',
  templateUrl: './subject-property-zip.component.html',
  styleUrls: ['./subject-property-zip.component.scss']
})
export class SubjectPropertyZipComponent implements OnInit {

  constructor(public data:BorrowerDataService) { }

  ngOnInit(): void {
  }

}
