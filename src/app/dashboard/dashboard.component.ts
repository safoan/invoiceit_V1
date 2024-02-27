import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Dernier Facture', cols: 1, rows: 1 },
          { title: 'Total vente', cols: 1, rows: 1 },
          { title: 'Dernier Produit', cols: 1, rows: 1 },
          { title: 'Total Benifies', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Dernier Facture', cols: 2, rows: 1 },
        { title: 'Total vente', cols: 1, rows: 1 },
        { title: 'Dernier Produit', cols: 1, rows: 2 },
        { title: 'Total Benifies', cols: 1, rows: 1 }
      ];
    })
  );
}
