import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titleLabel()" />

    @if ( user() ) {
    <section>
      <img [alt]="user()?.first_name" [srcset]="user()?.avatar" />

      <div>
        <h3>
          {{ user()?.first_name }} {{ user()?.last_name }}
          <p>{{ user()?.email }}</p>
        </h3>
      </div>
    </section>
    } @else {
    <p>Cargando...</p>
    }
  `,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  // public user = signal<User|undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `Información del usuario ${this.user()!.first_name} ${
        this.user()!.last_name
      }`;
    }

    return 'Información del usuario';
  });

  // constructor () {
  //   this.route.params.subscribe( params => {
  //     console.log({params})
  //   });
  // }
}
