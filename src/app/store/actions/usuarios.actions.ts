import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuarios = createAction('[Usuarios Component] Cargar Usuarios');

export const cargarUsuariosSuccess = createAction('[Usuarios Component] Cargar Usuarios Success'
    , props<{ usuarios: Usuario[] }>()
);

export const cargarUsuariosError = createAction('[Usuarios Component] Cargar Usuarios Error'
    , props<{ payload: any }>()
);