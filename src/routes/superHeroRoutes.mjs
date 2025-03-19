import express from "express";
import { obtenerSuperheroePorIdController, obtenerTodosLosSuperheroesController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller, insertSuperHeroController } from '../controllers/superheroesController.mjs'

const router =  express.Router()

router.get('/heroes', obtenerTodosLosSuperheroesController)
router.get('/heroes/buscarporid/:id', obtenerSuperheroePorIdController)
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController)
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller)
router.post('/heroes', insertSuperHeroController)

export default router;