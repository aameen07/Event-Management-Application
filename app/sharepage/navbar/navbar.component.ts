import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string){
    this.featureSelected.emit(feature); 
  }

}
