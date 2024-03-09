import {Component, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from "../auth.service";
import { HttpClientModule } from '@angular/common/http';
import {PopupService} from "../popup.service";
import {PopupComponent} from "../popup/popup.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  model: any = {};

  constructor(private authService: AuthService, private popupService: PopupService) {}

  onSubmit() {
    this.popupService.show('This is an error message!', 'error');

    this.authService.login(this.model.email, this.model.password).subscribe(
      (token) => {
        localStorage.setItem('jwt', token);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
