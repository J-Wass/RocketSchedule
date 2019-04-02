import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  recent_scores = [
    {
      teams: ['NRG', 'G2'],
      winner: ['NRG'],
      score: [2,1],
      league: 'RLCS'
    },
    {
      teams: ['C9', 'G2'],
      winner: ['C9'],
      score: [2,1],
      league: 'RLCS'
    },
    {
      teams: ['NRG', 'G2'],
      winner: ['NRG'],
      score: [2,1],
      league: 'RLCS'
    },
    {
      teams: ['NRG', 'G2'],
      winner: ['NRG'],
      score: [2,1],
      league: 'RLCS'
    },
    {
      teams: ['NRG', 'G2'],
      winner: ['NRG'],
      score: [2,1],
      league: 'RLCS'
    },
  ]
}
