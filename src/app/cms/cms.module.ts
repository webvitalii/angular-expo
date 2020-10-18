import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';

const routesCMS: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: PostsComponent },
      { path: 'post/:id', component: PostComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesCMS)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LayoutComponent,
    PostsComponent,
    PostComponent
  ]
})
export class CMSModule {

}
