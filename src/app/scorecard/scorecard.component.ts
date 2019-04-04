import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() record: Object

  isWinner = (team) => {
    return this.record['winner'] == team;
  }
}

export default ScorecardComponent
