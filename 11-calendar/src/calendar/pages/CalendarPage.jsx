import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, NavBar } from "../";

import { localizer, getMessagesEs } from "../../helpers";
import { useState } from "react";
import { useCalendarStore, useUiStore } from "../../hooks";

export const CalendarPage = () => {
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore();
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );
  const eventStyleGetter = (event, start, end, isSelected) => {};

  const onDoubleClick = (event) => {
    openDateModal();
  };

  const onSelect = (event) => {
    setActiveEvent(event);
  };

  const onViewChanged = (event) => {
    console.log({ viewChanged: event });
    localStorage.setItem("lastView", event);
  };

  return (
    <>
      <NavBar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: "calc(100vh - 120px)",
          width: "calc(100vw - 100px)",
          margin: "0 auto",
        }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />

      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  );
};