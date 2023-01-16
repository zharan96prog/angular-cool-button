import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  primary = 'primary';
  secondary = 'secondary';
  destructive = 'destructive';
  large = 'large';
  medium = 'medium';
}
