import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import {DevicesService} from '../../services/devices.service';
import {DeviceModel} from '../../services/device.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  device;
  serial;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DevicesService,
    private location: Location
  ) { }

  ngOnInit(): void {

  }



}
