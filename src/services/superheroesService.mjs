import superHeroRepository from '../repositories/SuperHeroRepository.mjs'

export async function obtenerSuperheroesPorId(id) {
    return await superHeroRepository.obtenerPorId(id)
}

export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos()
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await superHeroRepository.buscarPorAtributo(atributo, valor)
}

export async function obtenerSuperheroesMayoresDe30() {
    return await superHeroRepository.obtenerMayoresDe30()
}

export async function insertSuperHero() {
    return await superHeroRepository.insertSuperHero()
}