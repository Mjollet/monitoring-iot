import {Component, OnInit, ViewChild} from '@angular/core';
import {DeviceModel} from '../../services/device.model';
import {MatTableDataSource} from '@angular/material/table';
import {DevicesService} from '../../services/devices.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-devices-table',
  templateUrl: './devices-table.component.html',
  styleUrls: ['./devices-table.component.css']
})
export class DevicesTableComponent implements OnInit{

  rows: DeviceModel [];
  dataSource;
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
  // pagination of devices displayed
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private deviceService: DevicesService) {
  }

  // subscribe to devices list
  ngOnInit(): void {
    this.deviceService.getDevices().subscribe(result => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  // selection of a particular device for details showing
  onSelect(row: DeviceModel): void {
    this.selectedDevice = row;
    console.log(row);
  }

  // filter desvices results
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


