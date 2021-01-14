import { Component, OnInit } from '@angular/core';
import { FunnelDataService } from '../../../services/funnel-data.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor(public data:FunnelDataService) { }

  ngOnInit(): void {
  }

}
