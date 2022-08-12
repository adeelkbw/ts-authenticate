import { validateRequest } from './middleware/validateRequest'
import { userCreateSchema, userSessionScehma } from './schema/user.schema'
import { Express, Response, Request } from 'express'
import { createUserHandler } from './controller/user.controller'
import { createSessionHandler } from './controller/session.controller'

export default function (app: Express) {
  //test end point
  app.get('/', (req: Request, res: Response) => res.sendStatus(200))

  //create user
  app.post('/api/users', validateRequest(userCreateSchema), createUserHandler)

  app.post(
    '/api/session',
    validateRequest(userSessionScehma),
    createSessionHandler
  )
}
