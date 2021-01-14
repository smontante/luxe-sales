import { Component, OnInit } from '@angular/core';
import { FunnelDataService } from '../../../services/funnel-data.service';

@Component({
  selector: 'app-not-interested',
  templateUrl: './not-interested.component.html',
  styleUrls: ['./not-interested.component.scss']
})
export class NotInterestedComponent implements OnInit {

  constructor(public data:FunnelDataService) { }

  ngOnInit(): void {
  }

}
