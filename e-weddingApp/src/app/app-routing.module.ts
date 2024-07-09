import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeddingFormComponent } from './wedding-form/wedding-form.component';
import { WeddingPreviewComponent } from './wedding-preview/wedding-preview.component';

const routes: Routes = [
  { path: '', component: WeddingFormComponent },
  { path: 'preview', component: WeddingPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
