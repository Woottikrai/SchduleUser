import dayjs from "dayjs";
import React from "react";
import moment from "moment";
import Box from "../../components/box";

export default function Booking() {
  const [arrDate, setArrDate] = React.useState([
    { date: "Mon", numDate: 3 },
    { date: "Tues", numDate: 4 },
    { date: "Wed", numDate: 5 },
    { date: "Thur", numDate: 6 },
    { date: "Fri", numDate: 7 },
  ]);

  console.log(`${moment().day(1).date()}`);

  return (
    <div className="container mx-auto max-w-5xl grid grid-cols-5 text-center mt-32">
      {arrDate?.map((item, index) => {
        return (
          <div key={index}>
            <Box date={item.date} numDate={item.numDate} className="" />
          </div>
        );
      })}
    </div>
  );
}
