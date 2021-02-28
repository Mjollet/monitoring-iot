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

  getNumber(element, fractionDigits: number): string {
    return Number(element).toLocaleString('fr-FR', {minimumFractionDigits: fractionDigits, maximumFractionDigits: fractionDigits});
  }

}


