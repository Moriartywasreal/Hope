import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component'
import { CategoryComponent } from './components/category/category.component';


const routes : Routes = [
  { path: '', component: LandingComponent},
  { path: 'category/:category_id', component: CategoryComponent }
  // { path: 'quotes/:cat_id', component: QuoteComponent},
  // { path: 'quote/new-quote', component: AddQuoteComponent },
  // { path: 'admin', component: AdminComponent },
  // { path: 'admin/approve-form/:id', component: HeaderAdminComponent },
  // { path: 'admin/all-contents', component: NewscontentComponent },
  // { path: 'admin/add-category', component: CategoryAdminComponent },
  // { path: 'admin/all-categories', component: ShowCategoryComponent },
  // { path: 'admin/edit-category/:id', component: CategoryAdminComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
