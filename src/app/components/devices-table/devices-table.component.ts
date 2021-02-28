import {Component, OnInit} from '@angular/core';
import {DeviceModel} from '../../services/device.model';
import {MatTableDataSource} from '@angular/material/table';
import {DevicesService} from '../../services/devices.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-devices-table',
  templateUrl: './devices-table.component.html',
  styleUrls: ['./devices-table.component.css']
})
export class DevicesTableComponent implements OnInit {
  rows: DeviceModel [];
  data;
  columns = [
    'serial_number',
    'status',
    'last_seen_at',
    'mac_wifi',
    'sim_id',
    'voltage',
    'connection_type',
    'url',
  ];

  Columns = [
    'N° serial',
    'Status',
    'Url',
    'Last check',
    'Connection type',
    'Mac wifi',
    'Sim id',
    'Voltage',
  ];

  constructor(private deviceService: DevicesService) {
  }

  ngOnInit(): void {
    this.deviceService.getDevices().subscribe(result => {
        this.data = new MatTableDataSource(result);
        console.log(this.data);
      }
    );
  }

}


