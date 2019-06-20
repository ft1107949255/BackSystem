import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from 'primeng/primeng';
import { HeaderComponent } from './components/header/header.component';  // header  components
import {PanelMenuModule} from 'primeng/panelmenu';
// import {MenuItem} from 'primeng/api';
import { MenuComponent } from './components/menu/menu.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DevicesInstrumentsComponent } from './devices-instruments/devices-instruments.component';
import { PostpartumPsychologyComponent } from './postpartum-psychology/postpartum-psychology.component';
import { IndexComponent } from './index/index.component';
import {ChartModule} from 'primeng/chart';
import { TableComponent } from './components/table/table.component';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import {MenuModule} from 'primeng/menu';
import * as $ from 'jquery';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { UsersComponent } from './users/users.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import {DropdownModule} from 'primeng/dropdown';
import {StepsModule} from 'primeng/steps';
import {FieldsetModule} from 'primeng/fieldset';
import {TabMenuModule} from 'primeng/tabmenu';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import { UserTableComponent } from './components/user-table/user-table.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule } from '@angular/common/http';
import {httpInterceptorProviders} from 'src/app/common/http-interceptors/index'
import {apiList} from './common/app.api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    DoctorComponent,
    DevicesInstrumentsComponent,
    PostpartumPsychologyComponent,
    IndexComponent,
    TableComponent,
    LoginComponent,
    ServiceComponent,
    UsersComponent,
    UpdatePasswordComponent,
    UserTableComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    PanelMenuModule,
    ChartModule,
    TableModule,
    InputTextModule,
    MultiSelectModule,
    FormsModule,
    MenuModule,
    DropdownModule,
    StepsModule,
    FieldsetModule,
    TabMenuModule,
    ContextMenuModule,
    ToastModule,
    DialogModule,
    InputSwitchModule,
    MessagesModule,
    MessageModule,
    OrganizationChartModule
  ],
  providers: [httpInterceptorProviders, apiList],
  bootstrap: [AppComponent]
})
export class AppModule { }
