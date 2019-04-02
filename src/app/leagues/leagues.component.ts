import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() leagues: Array<String>
}

export default LeaguesComponent
