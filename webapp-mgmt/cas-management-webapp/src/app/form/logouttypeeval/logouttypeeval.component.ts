import {Component, OnInit, Input} from '@angular/core';
import {Messages} from "../../messages";
import {AbstractRegisteredService} from "../../../domain/registered-service";
import {Data} from "../data";

@Component({
  selector: 'app-logouttypeeval',
  templateUrl: './logouttypeeval.component.html'
})
export class LogouttypeevalComponent implements OnInit {

  service: AbstractRegisteredService;
  selectOptions;

  constructor(public messages: Messages,
              private data: Data) {
    this.service = data.service;
    this.selectOptions = data.selectOptions;
  }

  ngOnInit() {
  }

}
