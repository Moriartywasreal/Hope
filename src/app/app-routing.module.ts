import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FeaturedComponent } from './featured/featured.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QuoteComponent } from './quote/quote.component';
import { AddQuoteComponent } from './quote/add-quote/add-quote.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { NewscontentComponent } from './newscontent/newscontent.component';
import { CategoryAdminComponent } from './category-admin/category-admin.component';
import { ShowCategoryComponent } from './category-admin/show-category/show-category.component';

const routes : Routes = [
    { path: 'about-us', component: AboutUsComponent},
    { path: 'quotes/:cat_id', component: QuoteComponent},
    { path: 'quote/new-quote', component: AddQuoteComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'admin/approve-form/:id', component: HeaderAdminComponent },
    { path: 'admin/all-contents', component: NewscontentComponent },
    { path: 'admin/add-category', component: CategoryAdminComponent },
    { path: 'admin/all-categories', component: ShowCategoryComponent },
    { path: 'admin/edit-category/:id', component: CategoryAdminComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule { } 
// export const routingComponents = [HomeComponent]