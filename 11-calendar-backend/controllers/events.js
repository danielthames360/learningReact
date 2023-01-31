const { response, request } = require("express");
const Event = require("../models/Event");

const getEvents = async (req = request, res = response) => {
  const events = await Event.find().populate("user", "name");

  res.status(200).json({
    ok: true,
    events,
  });
};

const createEvent = async (req = request, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;

    await event.save();

    res.status(201).json({
      ok: true,
      msg: "createEvent",
      event,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Contact your administrator",
    });
  }
};

const updateEvent = async (req = request, res = response) => {
  const { id } = req.params;
  const uid = req.uid;

  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Event does not exist in the db",
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "User has no rights to update this event",
      });
    }

    const newEvent = {
      ...req.body,
      user: uid,
    };

    const eventUpdated = await Event.findByIdAndUpdate(id, newEvent, {
      new: true,
    });

    res.status(201).json({
      ok: true,
      event: eventUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Contact your administrator",
    });
  }
};

const deleteEvent = async (req = request, res = response) => {
  const { id } = req.params;
  const uid = req.uid;

  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Event does not exist in the db",
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "User has no rights to update this event",
      });
    }

    await Event.findByIdAndDelete(id);

    res.status(201).json({
      ok: true,
      msg: "Event deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Contact your administrator",
    });
  }
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
