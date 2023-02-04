const { Router } = require("express");
const eventsRouter = Router();

const { validateJWT } = require("../middlewares/validateJWT");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const { check } = require("express-validator");
const { fieldValidator } = require("../middlewares/fieldValidator");
const { isDate } = require("../helpers/isDate");

//? All routes must go through JWT validation.
eventsRouter.use(validateJWT);

//TODO -> Get events
eventsRouter.get("/", getEvents);

//TODO -> create event
eventsRouter.post(
  "/",
  [
    check("title", "Title is required").not().isEmpty(),
    check("start", "Start date is required").custom(isDate),
    check("end", "End date is required").not().isEmpty(),
    fieldValidator,
  ],
  createEvent
);

//TODO -> update event
eventsRouter.put(
  "/:id",
  [
    check("title", "Title is required").not().isEmpty(),
    check("start", "Start date is required").custom(isDate),
    check("end", "End date is required").not().isEmpty(),
    fieldValidator,
  ],
  updateEvent
);

//TODO -> delete event
eventsRouter.delete("/:id", deleteEvent);

module.exports = eventsRouter;
