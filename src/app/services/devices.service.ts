import { Injectable } from '@angular/core';
import {DeviceModel} from './device.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private httpClient: HttpClient) { }

  getDevices(): Observable<DeviceModel[]> {
    return this.httpClient.get<DeviceModel[]>( 'http://localhost:8010/devices?n=10' );
  }

}
