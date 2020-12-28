import { Component, OnInit } from '@angular/core';
import { FunnelDataService } from '../../../services/funnel-data.service';

@Component({
  selector: 'app-marketing-channel',
  templateUrl: './marketing-channel.component.html',
  styleUrls: ['./marketing-channel.component.scss']
})
export class MarketingChannelComponent implements OnInit {

  public headerText:String = 'Which marketing channel?';

  constructor(public funnel:FunnelDataService) { }

  ngOnInit(): void {
  }

}
