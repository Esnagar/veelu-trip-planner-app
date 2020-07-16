import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class SimpleLoadStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    if (route.data && route.data.preload) {
      return load();
    }
    return of(null);
  }
}