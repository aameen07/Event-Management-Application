import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/book/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor( private service:OrderDetailsService) { }
  eventData:any;
  ngOnInit(): void {
    this.eventData = this.service.eventDetails;
  }

}
