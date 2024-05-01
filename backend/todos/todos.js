import mongoose, { Schema } from "mongoose"

await mongoose.connect('mongodb://localhost:27017/ToDoList')

// const SuperheroSchema = new Schema({ name: String, costume: String, superPower: String })

// const Superheroes = mongoose.model("superhero", SuperheroSchema, "superheroes")

// export async function getAllHeroes() {
//     return await Superheroes.find()
// }

// export async function getHeroById(id) {
//     return await Superheroes.findById(id)
// }

// export async function createSuperhero(heroDetail) {
//     return await Superheroes.create(heroDetail)
// }
// export async function deleteHeroById(id) {
//     console.log("deleting superhero", id)
//     return await Superheroes.findByIdAndDelete(id)
// }

// export async function disconnectDatabase() {
//     await mongoose.disconnect()
// }
