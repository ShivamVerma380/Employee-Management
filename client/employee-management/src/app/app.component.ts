import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, EmailVerificationComponent, NavBarComponent]
})
export class AppComponent {
  title = 'employee-management';
}
