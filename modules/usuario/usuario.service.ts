import { Request, Response } from "express";
import { listadoUsuariosDb } from "./usuario.data";
let usuariosDb = listadoUsuariosDb;

export const crearlistadoUsuarios = (req: Request, res:Response) =>{
    res.json({message: 'Listado de usuarios: ', data: { usuariosDb }})
}

// export const buscarUsuarioPorId = (req: Request, res:Response) =>{
//     const u = usuariosDb.filter((u) => u.id == req.params.usuarioId);
//     return u;
// }


//Preguntar req.body y body.parser y dif entre app.use/get