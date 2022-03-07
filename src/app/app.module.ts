import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms'
import{HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './filter.pipe';

import { ProductsComponent } from './products/products.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    PostsComponent,
    HomeComponent,
    UsersComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
    FilterPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  //   NgbModule
  
    
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
