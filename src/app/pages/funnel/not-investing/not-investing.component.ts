import { Component, OnInit } from '@angular/core';
import { FunnelDataService } from '../../../services/funnel-data.service';

@Component({
  selector: 'app-not-investing',
  templateUrl: './not-investing.component.html',
  styleUrls: ['./not-investing.component.scss']
})
export class NotInvestingComponent implements OnInit {

  constructor(public data: FunnelDataService) { }

  ngOnInit(): void {
  }

}
