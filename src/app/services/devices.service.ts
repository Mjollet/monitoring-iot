import { Injectable } from '@angular/core';
import {DeviceModel} from './device.model';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  deviceUrl = 'http://localhost:8010/devices';
  devices;

  constructor(private httpClient: HttpClient) { }

  getDevices(): Observable<DeviceModel[]> {
    return this.httpClient.get<DeviceModel[]>( 'http://localhost:8010/devices?n=10' );
  }

}
