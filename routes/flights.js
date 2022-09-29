import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

/* GET home page. */
router.get('/', flightsCtrl.index)

router.get('/new', flightsCtrl.new)

// GET localhost:3000/flights/:id
router.get('/:id', flightsCtrl.show)

router.get('/:id/edit', flightsCtrl.edit)

// POST localhost:3000/flights
router.post('/', flightsCtrl.create)

router.post('/:id/tickets', flightsCtrl.createTicket)

router.put('/:id', flightsCtrl.update)

router.delete('/:id', flightsCtrl.delete)

export { 
  router
}
