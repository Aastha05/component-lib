import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './pages/button/button.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { ModalComponent } from './pages/modal/modal.component';

const routes: Routes = [
  {
    path: 'components/button',
    children: [
      {
        path: '',
        component: ButtonComponent
      }
    ],
    data: {
      componetName: 'Button',
      additionalText: ''
    }
  },
  {
    path: 'components/checkbox',
    children: [
      {
        path: '',
        component: CheckboxComponent
      }
    ],
    data: {
      componetName: 'Checkbox',
      additionalText: ''
    }
  },
  {
    path: 'components/modal',
    children: [
      {
        path: '',
        component: ModalComponent
      }
    ],
    data: {
      componetName: 'Modal',
      additionalText: ''
    }
  },
  {
    path: '**',
    redirectTo: 'components/button'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
