import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', type: 'column', rows: 50 },
        ];
      }

      return [
        { title: 'Card 1', type: 'row', rows: 0 },
      ];
    })
  );

  displayedColumns: string[] = ['rooms', 'adults', 'action'];
  dataSource = new MatTableDataSource<string>(['1','2','3']);
  constructor(private breakpointObserver: BreakpointObserver) {}
}
