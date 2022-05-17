import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/book/order-details.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor( private service:OrderDetailsService) { }
  eventData:any;
  ngOnInit(): void {
    this.eventData=this.service.eventDetails;
  }

}
