import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuario = createAction('[Usuario Component] Cargar Usuario',
    props<{ id: string }>()
);

export const cargarUsuarioSuccess = createAction('[Usuario Component] Cargar Usuario Success'
    , props<{ usuario: Usuario }>()
);

export const cargarUsuarioError = createAction('[Usuario Component] Cargar Usuario Error'
    , props<{ payload: any }>()
);