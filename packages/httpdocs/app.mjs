// minimal boilerplate start up script
import Fastify from 'fastify'
import FastifyVite from 'fastify-vite'
import renderer from 'fastify-vite-vue'

//const Fastify = require('fastify')
//const FastifyVite = require('fastify-vite')
//const renderer = require('fastify-vite-vue')

const root = import.meta.url

console.log('ROOT: ', root)



const app = Fastify({ logger: true })

await app.register(FastifyVite, { root, renderer })
await app.vite.commands()
await app.listen(process.env.PORT || 3006)
