import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interfaces';

@Component({
  templateUrl: './propertis-page.component.html',
  styleUrls: ['./propertis-page.component.css']
})
export class PropertisPageComponent implements OnDestroy, OnInit {

  public user = signal<User>({
      id: 1,
      email:'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
      avatar: 'https://reqres.in/img/faces/1-image.jpg'
  });

  public fullName = computed( () => `${this.user().first_name} ${this.user().last_name}`);

  public counter = signal(10);

  public userChangeEffect = effect( () => {
    console.log('User change', this.user().first_name);
    console.log (`${this.user().first_name} - ${this.counter()}`)
  });

  ngOnInit(): void {
    setInterval( () => {
      this.counter.update( current => current + 1);
    }, 1000);
  }

  ngOnDestroy(): void {
    // this.userChangeEffect.destroy();
  }

  incriseBy(value: number) {
    this.counter.update(current => current + value);
  }


  onFieldUpdate( field: keyof User, value: any) {
    // Primer ejemplo

    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // })

    // Segundo ejemplo
    // this.user.update( current => {
    //   return {
    //     ...current,
    //     [field]: value
    //   }
    // })

    // Tercer ejemplo
    this.user.mutate( current => {
      switch (field) {
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'id':
          current.id = Number(value) || 0;
          break;
      }
    })
  }
}
