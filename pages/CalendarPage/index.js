import React, { useState } from "react";
import Calendar from '../../components/Calendar';

// import dayGridPlugin from '@fullcalendar/daygrid';

export default function CalendarPage() {
  const [selectedCar, setSelectedCar] = useState("Medium");
  const [timeSpan, setTimeSpan] = useState({ start: null, end: null });

  const onSelect = (args) => {
    console.log(
      `Start: ${args.start}, type: ${typeof args.start}, instanceof: ${
        args.start instanceof Date
      }`
    );
    console.log(
      `End: ${args.end}, type: ${typeof args.end}, instanceof: ${
        args.end instanceof Date
      }`
    );
    setTimeSpan({ start: args.start, end: args.end });
  };

  const onSubmit = async () => {
    console.log("onSubmit");

    if (timeSpan.start && timeSpan.end) {
      const formData = new FormData();
      formData.append("start", timeSpan.start.toISOString());
      formData.append("end", timeSpan.end.toISOString());

      const response = await fetch("/api/calendarSelect", {
        method: "POST",
        body: formData,
      });
    }
  };

  return (
    <>
      <div className="car">
        <h1>Wähle eine Variante</h1>

        <input
          type="radio"
          name="car"
          value="five-seats"
          id="regular"
          checked={selectedCar === "five-seats"}
          onChange={(e) => setSelectedCar(e.target.value)}
        />
        <label htmlFor="regular">5 bzw 8 Sitze</label>

        <input
          type="radio"
          name="car"
          value="transporter"
          id="variant1"
          checked={selectedCar === "transporter"}
          onChange={(e) => setSelectedCar(e.target.value)}
        />
        <label htmlFor="variant1">Transporter</label>

        <input
          type="radio"
          name="car"
          value="camper"
          id="variant2"
          checked={selectedCar === "camper"}
          onChange={(e) => setSelectedCar(e.target.value)}
        />
        <label htmlFor="variant2">Camper</label>
      </div>

      <Calendar onSelect={onSelect} />
      <button onClick={onSubmit}>Abschicken</button>
    </>
  );
}
