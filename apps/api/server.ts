
import * as express from 'express';
import * as cors from 'cors';
import { clerkMiddleware } from '@clerk/express';
import {  pageRouter  } from './src/modules/pages/routes/pages.routes.js';
const server: express.Express = express.default();

server.use(cors.default())
server.use(express.default.json())
server.use(express.default.urlencoded({ extended: true }))
server.use(clerkMiddleware())
server.use('/api/v1/pages',pageRouter)


export default server