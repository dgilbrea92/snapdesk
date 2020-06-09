const express = require("express");

const apiRouter = express.Router();

// require in middleware here
const jwtsController = require("../controllers/jwtsController");
const userController = require("../controllers/userController");
const ticketsController = require("../controllers/ticketsController");
const roomsController = require("../controllers/roomsController");
const leaderboardController = require('../controllers/leaderboardController');

// ADD API ROUTES HERE
apiRouter.get(
  "/user",
  jwtsController.isLoggedIn,
  userController.getData,
  (req, res) => res.status(200).json(res.locals)
);

apiRouter.put(
  "/tickets/update",
  jwtsController.isLoggedIn,
  ticketsController.updateTicketStatus,
  (req, res) => res.status(200).json(res.locals)
);

apiRouter.get(
  "/tickets/:roomId",
  jwtsController.isLoggedIn,
  ticketsController.getActiveTickets,
  (req, res) => res.status(200).json(res.locals)
);

apiRouter.put('/tickets/cancel',
  jwtsController.isLoggedIn,
  ticketsController.cancelTicket,
  (req, res) => res.status(200).json(res.locals)
)

apiRouter.put('/tickets/accept',
  jwtsController.isLoggedIn,
  ticketsController.acceptTicket,
  (req, res) => res.status(200).json(res.locals)
);

apiRouter.put('/tickets/resolved',
  jwtsController.isLoggedIn,
  ticketsController.resolveTicket,
  (req,res) => res.status(200).json(res.locals)
);

apiRouter.post(
  "/tickets",
  jwtsController.isLoggedIn,
  ticketsController.addTicket,
  (req, res) => res.status(200).json(res.locals)
);

apiRouter.post(
  "/rooms",
  jwtsController.isLoggedIn,
  roomsController.addRooms,
  (req, res) => {
    console.log("END OF ROOMS POST REQUEST", res.locals);
    res.status(200).json(res.locals);
  }
);

apiRouter.get('/leaderboard',
  jwtsController.isLoggedIn,
  leaderboardController.getLeaderBoard,
  (req, res) => res.status(200).json(res.locals)
);

apiRouter.get('/leaderboard/topic',
  jwtsController.isLoggedIn,
  leaderboardController.byTopic,
  (req,res) => res.status(200).json(res.locals)
);

module.exports = apiRouter;