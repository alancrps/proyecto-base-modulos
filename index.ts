import express, { Express, Request, Response, response } from "express";
import bodyParser from 'body-parser'
import listadoUsuarios from "./modules/usuario/usuario.routes";
import { listadoUsuariosDb } from "./modules/usuario/usuario.data";
// import { buscarUsuarioPorId } from "./modules/usuario/usuario.service";
const app: Express = express();

app.use(bodyParser.json())

app.get('/', (req: Request, res:Response) => {
})

app.use('/usuarios', listadoUsuarios)

app.get('/usuarios/:usuarioId', function buscarUsuarioPorId(req: Request, res:Response){
	const usuariosDb = listadoUsuariosDb;
	const u = usuariosDb.filter((u) => u.id === Number(req.params.usuarioId))

	res.json(u)
})

app.listen(1000, () =>{
	console.log(`⚡SERVER API IS RUNNING http://localhost:1000`)
})