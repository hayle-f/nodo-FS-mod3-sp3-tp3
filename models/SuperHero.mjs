import mongoose from "mongoose";

const superheroSchema = new mongoose.Schema({
    nombreSuperheroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    nombreSociedad: String, 
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' }, 
    debilidad: String,
    poderes: [String], 
    habilidadEspecial: String, 
    aliados: [String], 
    enemigos: [String], 
    createdAt: { type: Date, default: Date.now }, 
    creador: String
});

const SuperHero =  mongoose.model('SuperHero', superheroSchema, 'Grupo-02');

export default SuperHero;