import { TestBed } from '@angular/core/testing';

import { DevicesService } from './devices.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {mockDevices} from './device.mock';

describe('DevicesService', () => {
  let service: DevicesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DevicesService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request get devices endpoint', () => {
    service.getDevices().subscribe(data => {
      expect(data).toEqual(mockDevices);
    });
    const request = httpMock.expectOne('http://localhost:8010/devices?n=10');
    request.flush(mockDevices);
  });
});
