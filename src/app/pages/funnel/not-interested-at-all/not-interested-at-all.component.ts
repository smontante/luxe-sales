import { Component, OnInit } from '@angular/core';
import { FunnelDataService } from '../../../services/funnel-data.service';

@Component({
  selector: 'app-not-interested-at-all',
  templateUrl: './not-interested-at-all.component.html',
  styleUrls: ['./not-interested-at-all.component.scss']
})
export class NotInterestedAtAllComponent implements OnInit {

  constructor(public data:FunnelDataService) { }

  ngOnInit(): void {
  }

}
