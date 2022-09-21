import { AfterViewInit,  Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


export interface PeriodicElement {
  name: string;
  address: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', address: 'Kandy road malabe'},
  {name: 'Hydrogen', address: 'Kandy road malabe'},
  {name: 'Hydrogen', address: 'Kandy road malabe'},
  {name: 'Hydrogen', address: 'Kandy road malabe'},
  {name: 'Hydrogen', address: 'Kandy road malabe'},
];

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
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
  displayedColumns: string[] = ['name', 'address', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private breakpointObserver: BreakpointObserver) {}
}
