import { Component, OnInit } from '@angular/core';
import { SqliteService } from '../sqlite.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  constructor(private sql: SqliteService) { }

  ngOnInit() {
  }

  getPeopleHouseLoss() {
  }

}
