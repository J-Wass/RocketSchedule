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
      teams: ['C9', 'G2'],
      winner: ['G2'],
      score: [2,4],
      league: 'RLCS'
    },
    {
      teams: ['ZNM', 'Method'],
      winner: ['Method'],
      score: [2,3],
      league: 'RLRS'
    },
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
      teams: ['C9', 'G2'],
      winner: ['G2'],
      score: [2,4],
      league: 'RLCS'
    },
    {
      teams: ['ZNM', 'Method'],
      winner: ['Method'],
      score: [2,3],
      league: 'RLRS'
    },
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
      teams: ['C9', 'G2'],
      winner: ['G2'],
      score: [2,4],
      league: 'RLCS'
    },
    {
      teams: ['ZNM', 'Method'],
      winner: ['Method'],
      score: [2,3],
      league: 'RLRS'
    },
  ];

  left =  () => {
    const scrollbar: HTMLElement = document.getElementById('scoreboard')
    scrollbar.scrollLeft -= 150
  }
  right =  () => {
    const scrollbar: HTMLElement = document.getElementById('scoreboard')
    scrollbar.scrollLeft += 150
  }
}
export default ScoreboardComponent
