import { Component, OnInit } from '@angular/core';
import { name, version } from '../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


    public name: string = name;
    public version: string = version;

  constructor() { }

  ngOnInit() {
  }

}
