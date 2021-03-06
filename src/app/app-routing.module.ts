import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './question/add-question/add-question.component';

const routes: Routes = [
  {
    path: 'question',
    loadChildren: () => import('./question/question.module').then(m => m.QuestionModule)
  },
  {
    path : '',
    redirectTo:'question',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
