import { Component, OnInit } from '@angular/core';
import { BuildingService } from './building-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  names: any[] = [];
  errorMessage: string;

  constructor(public businessService: BuildingService){

  }

  ngOnInit(){

    this.getNames()
  }

  getNames() {
    this.businessService.get()
      .subscribe(
        names => this.names = names,
        error =>  this.errorMessage = <any>error
      );
  }

}
