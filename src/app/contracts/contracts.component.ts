import { AfterViewInit,  Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  position: number;
  name: string;
  price: number;
  rooms: number;
  adults: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', rooms: 2, price: 2500, adults: 5},
  {position: 1, name: 'Hydrogen', rooms: 2, price: 2500, adults: 5},]

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', type: 'column', rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', type: 'row', rows: 1 },
      ];
    })
  );
  displayedColumns: string[] = ['name', 'price', 'rooms','adults','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private breakpointObserver: BreakpointObserver) {}
}

interface Food {
  value: string;
  viewValue: string;
}