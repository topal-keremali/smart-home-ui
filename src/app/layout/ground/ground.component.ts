import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ground',
  templateUrl: './ground.component.svg',
  styleUrls: ['./ground.component.scss']
})
export class GroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  log(){
    console.log("works!")
  }

}
