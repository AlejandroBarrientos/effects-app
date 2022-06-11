import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usuariosActions from '../actions';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {
    constructor(private actions$: Actions,
        private usuarioService: UsuarioService) {

    }

    // cargarUusarios$ = createEffect(
    //     () => this.actions$.pipe(
    //         ofType(usuariosActions.cargarUsuarios),
    //         tap(data => console.log('effect tap', data)),
    //         mergeMap(
    //             () => this.usuarioService.getUsers().pipe(
    //                 tap(data => console.log('getUsers effect', data))
    //             )
    //         )
    //     ));

    cargarUusarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.cargarUsuario),
            mergeMap(
                (action) => this.usuarioService.getUserById(action.id)
                    .pipe(
                        map(user => usuariosActions.cargarUsuarioSuccess({ usuario: user })),
                        catchError(err => of(usuariosActions.cargarUsuarioError({ payload: err }))) //Aqui tenemos que regresar una observable y para eso es el of
                    )
            )
        ));
}