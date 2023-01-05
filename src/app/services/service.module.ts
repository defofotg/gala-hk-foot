import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './storage.service';
import { UserService } from './user.service';
import { AuthService } from '../authentication/auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [StorageService, UserService, AuthService],
})
export class ServiceModule {}
