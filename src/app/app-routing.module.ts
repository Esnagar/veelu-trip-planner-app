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
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
