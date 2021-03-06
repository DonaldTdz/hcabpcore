import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { AbpModule } from 'abp-ng2-module/dist/src/abp.module';
import { LocalizationService } from 'abp-ng2-module/dist/src/localization/localization.service';
import { LayoutModule } from '@app/layout/layout.module';
import { HomeComponent } from '@app/home/home.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
// import { AboutComponent } from '@app/about/about.component';
import { TenantsComponent } from '@app/system/tenants/tenants.component';
import { UsersComponent } from '@app/system/users/users.component';
import { RolesComponent } from '@app/system/roles/roles.component';
import { CreateTenantComponent } from '@app/system/tenants/create-tenant/create-tenant.component';
import { EditTenantComponent } from '@app/system/tenants/edit-tenant/edit-tenant.component';
import { CreateRoleComponent } from '@app/system/roles/create-role/create-role.component';
import { EditRoleComponent } from '@app/system/roles/edit-role/edit-role.component';
import { CreateUserComponent } from '@app/system/users/create-user/create-user.component';
import { EditUserComponent } from '@app/system/users/edit-user/edit-user.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    AbpModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    // AboutComponent,
    TenantsComponent,
    UsersComponent,
    RolesComponent,
    CreateTenantComponent,
    EditTenantComponent,
    CreateRoleComponent,
    EditRoleComponent,
    CreateUserComponent,
    EditUserComponent,
  ],
  entryComponents: [
    CreateTenantComponent,
    EditTenantComponent,
    CreateRoleComponent,
    EditRoleComponent,
    CreateUserComponent,
    EditUserComponent,
  ],
  providers: [LocalizationService],
})
export class AppModule { }
