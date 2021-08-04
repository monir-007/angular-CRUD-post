import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {ViewComponent} from "./view/view.component";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  {path: 'comment', redirectTo: 'comment/index', pathMatch: 'full'},
  {path: 'comment/index', component:IndexComponent},
  {path: 'comment/:id/view', component:ViewComponent},
  {path: 'comment/create', component:CreateComponent},
  {path: 'comment/:id/edit', component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
