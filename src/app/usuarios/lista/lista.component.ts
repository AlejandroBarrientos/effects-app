import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { AppState } from '../../app.reducers';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;



  // constructor(public usuarioService: UsuarioService) { }
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // this.usuarioService.getUsers().subscribe(users => {
    //   console.log(users);
    //   this.usuarios = users;
    // });



    // this.store.select('usuarios').subscribe(usuarios=>{
    //   console.log(usuarios.users);
    //usuarios.loaded
    //usuarios.loading
    //usuarios.error
    // });
    this.store.select('usuarios').subscribe(({ users, loading, error }) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    });



    this.store.dispatch(cargarUsuarios());
  }

}
