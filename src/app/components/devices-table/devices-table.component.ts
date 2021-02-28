import {Component, OnInit} from '@angular/core';
import {DeviceModel} from '../../services/device.model';
import {MatTableDataSource} from '@angular/material/table';
import {DevicesService} from '../../services/devices.service';

@Component({
  selector: 'app-devices-table',
  templateUrl: './devices-table.component.html',
  styleUrls: ['./devices-table.component.css']
})
export class DevicesTableComponent implements OnInit {
  rows: DeviceModel [];
  data;
  selectedDevice?: DeviceModel;
  displayedColumns = [
    'serial_number',
    'status',
    'mac_wifi',
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

  onSelect(row: DeviceModel): void {
    this.selectedDevice = row;
    console.log(row);
  }

}


