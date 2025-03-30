import express from "express";
import { obtenerSuperheroePorIdController, obtenerTodosLosSuperheroesController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller, insertSuperHeroController, updateSuperHeroController, deleteByIdController, deleteByHeroNameController} from '../controllers/superheroesController.mjs'

const router =  express.Router()

router.get('/heroes', obtenerTodosLosSuperheroesController)
router.get('/heroes/id/:id', obtenerSuperheroePorIdController)
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController)
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller)
router.post('/heroes/crear', insertSuperHeroController)
router.put('/heroes/actualizar', updateSuperHeroController)
router.delete('/heroes/eliminarporid/:id', deleteByIdController)
router.delete('/heroes/eliminarpornombre/:nombresuperheroe', deleteByHeroNameController)

export default router;