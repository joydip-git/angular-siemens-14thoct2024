import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { AppCommonModule } from './app-common/app-common.module';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersModule } from './users/users.module';
import { TokenService } from './services/token.service';

const appRoutes: Routes = [
  {
    path: '**', component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    AppCommonModule,
    UsersModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
