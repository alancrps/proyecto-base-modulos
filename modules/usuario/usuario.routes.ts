import express from "express";
import { crearlistadoUsuarios } from "./usuario.service";


const listadoUsuarios = express.Router();

listadoUsuarios.get('/all', crearlistadoUsuarios)

export default listadoUsuarios;