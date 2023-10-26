import React, { useRef } from "react";

import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function Calendar(props) {

  const {onSelect} = props

  const calendarRef = useRef(null);

  return (
    <FullCalendar
      innerRef={calendarRef}
      plugins={[timeGridPlugin, interactionPlugin]}
      editable
      selectable
      select={onSelect}
      />
    );
  };
  