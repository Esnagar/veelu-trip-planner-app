import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'intro/sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'intro/log-in',
    loadChildren: () => import('./pages/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'create-trip',
    loadChildren: () => import('./pages/create-trip/create-trip.module').then( m => m.CreateTripPageModule)
  },
  {
    path: 'trip',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'trip/:id',
    loadChildren: () => import('./pages/trip/trip.module').then( m => m.TripPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./pages/friends/friends.module').then( m => m.FriendsPageModule)
  },
  {
    path: 'add-friend',
    loadChildren: () => import('./pages/add-friend/add-friend.module').then( m => m.AddFriendPageModule)
  },
  {
    path: 'edit-trip/:id',
    loadChildren: () => import('./pages/edit-trip/edit-trip.module').then( m => m.EditTripPageModule)
  },
  {
    path: 'trip/:id/travelers',
    loadChildren: () => import('./pages/travelers/travelers.module').then( m => m.TravelersPageModule)
  },
  {
    path: 'trip/:id/checklist',
    loadChildren: () => import('./pages/checklist/checklist.module').then( m => m.ChecklistPageModule)
  },
  {
    path: 'trip/:id/activities',
    loadChildren: () => import('./pages/activities/activities.module').then( m => m.ActivitiesPageModule)
  },
  {
    path: 'trip/:id/activities/:id2/activity-detail',
    loadChildren: () => import('./pages/activity-detail/activity-detail.module').then( m => m.ActivityDetailPageModule)
  },
  {
    path: 'trip/:id/diary',
    loadChildren: () => import('./pages/diary/diary.module').then( m => m.DiaryPageModule)
  },
  {
    path: 'trip/:id/diary/:id2/entry-detail',
    loadChildren: () => import('./pages/entry-detail/entry-detail.module').then( m => m.EntryDetailPageModule)
  },
  {
    path: 'trip/:id/expenses',
    loadChildren: () => import('./pages/expenses/expenses.module').then( m => m.ExpensesPageModule)
  },
  {
    path: 'trip/:id/files',
    loadChildren: () => import('./pages/files/files.module').then( m => m.FilesPageModule)
  },
  {
    path: 'trip/:id/expenses/:id2/expense-detail',
    loadChildren: () => import('./pages/expense-detail/expense-detail.module').then( m => m.ExpenseDetailPageModule)
  }










];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
