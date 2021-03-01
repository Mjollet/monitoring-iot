import {Component, Input, OnInit} from '@angular/core';

import {DeviceModel} from '../../services/device.model';


@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  @Input() row: DeviceModel;

  constructor() { }

  ngOnInit(): void {

  }



}
