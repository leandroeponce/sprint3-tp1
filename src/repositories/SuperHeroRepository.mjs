import superHero from '../models/SuperHero.mjs'
import IRepository from './IRepository.mjs'

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await superHero.findById(id)
    }
    async obtenerTodos() {
        return await superHero.find()
    }

    async buscarPorAtributo(atributo, valor) {
        const superHeroes = await superHero.find()
        return superHeroes.filter(superHeroes => 
        String(superHeroes[atributo]).toLowerCase().includes(valor.toLowerCase())
        )
    }

    async obtenerMayoresDe30() {
        const superHeroes = await superHero.find()
        return superHeroes.filter(superHero => superHero.edad > 30 && superHero.planetaOrigen === 'Tierra' && superHero.poderes.length >= 2)
    }

    async  insertSuperHero() {
        const hero = new superHero( {
            nombreSuperHeroe: 'prueba',
            nombreReal: 'prueba post',
            edad: 40,
            planetaOrigen: 'Tierra',
            debilidad: 'prueba',
            poderes: ['prueba'],
            aliados: ['prueba'],
            enemigos: ['prueba'],
            creador: 'Leandro'
        });
        await hero.save();
        console.log('Superhéroe insertado:', hero);
        return hero;
    }
}

export default new SuperHeroRepository();


