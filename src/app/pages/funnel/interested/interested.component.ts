import { Component, OnInit } from '@angular/core';
import { FunnelDataService } from '../../../services/funnel-data.service';

@Component({
  selector: 'app-interested',
  templateUrl: './interested.component.html',
  styleUrls: ['./interested.component.scss']
})
export class InterestedComponent implements OnInit {

  public headerText:String = `Perfect! Well, We specialize in fix and flip and rental financing... 
  Are there properties your looking to flip... OR... hold long term, as a rental?`;
  
  constructor(public funnel:FunnelDataService) { }

  ngOnInit(): void {
  }

}
