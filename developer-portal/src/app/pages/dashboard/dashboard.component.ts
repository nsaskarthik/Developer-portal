import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    MatProgressSpinnerModule,
    MatCardModule  
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any[] = [];
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getDashboardData().subscribe({
      next: (res: any[]) => {
        this.data = res;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('API Error:', err);
        this.loading = false;
      }
    });
  }
}
