import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usuariosActions from '../actions';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {
    constructor(private actions$: Actions,
        private usuarioService: UsuarioService) {

    }

    cargarUusario$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.cargarUsuario),
            mergeMap(
                () => this.usuarioService.getUsers()
                    .pipe(
                        map(users => usuariosActions.cargarUsuariosSuccess({ usuarios: users })),
                        catchError(err => of(usuariosActions.cargarUsuariosError({ payload: err }))) //Aqui tenemos que regresar una observable y para eso es el of
                    )
            )
        ));
}