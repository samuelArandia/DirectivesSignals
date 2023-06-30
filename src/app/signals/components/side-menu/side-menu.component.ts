import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  router: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', router: 'counter' },
    { title: 'Información del usuario', router: 'user-info' },
    { title: 'Mutaciones', router: 'propertis' }
  ]);

  // public menuItems: MenuItem[] = [
    // { title: 'Contador', router: 'counter' },
    // { title: 'Información del usuario', router: 'user-info' },
    // { title: 'Mutaciones', router: 'propertis' }
  // ];


}
