import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-cert-placeholder',
  imports: [CommonModule],
  template: `
    <div style="padding: 2rem;">
      <h2>🔐 Certificate Upload</h2>
      <p>This module will handle secure certificate uploads for SSO and integrations.</p>
    </div>
  `
})
export class CertPlaceholderComponent {}
