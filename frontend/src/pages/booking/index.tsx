import dayjs from "dayjs";
import React from "react";
import moment from "moment";
import Box from "../../components/box";
import GridLayout from "../../components/layouts/gridLayout";
import { IUser } from "../../models/IUser";
import * as ApiUser from "../../service/API/UserApi";
import * as ApiCalendar from "../../service/API/CalendarApi";
import CardBooking from "../../components/card/cardBooking";
export default function Booking() {
  const [initialUsers, setUsers] = React.useState([] as Array<IUser>);

  const [arrDate, setArrDate] = React.useState([
    { date: "Mon", numDate: moment().day("Monday").date() },
    { date: "Tues", numDate: moment().day("Tuesday").date() },
    { date: "Wed", numDate: moment().day("Wednesday").date() },
    { date: "Thur", numDate: moment().day("Thursday").date() },
    { date: "Fri", numDate: moment().day("Friday").date() },
  ]);
  console.log(moment().isoWeekday());
  const handleDate = async (idx: string | number) => {
    const value = `2023-04-0${idx}`;
    // console.log(value);

    await ApiCalendar.Post({ date: value });
  };

  React.useEffect(() => {
    (async () => {
      const { data } = await ApiUser.Get();
      setUsers(data);
    })();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="container   grid grid-cols-5 gap-16 text-center mt-32 mb-10">
        {arrDate?.map((item, index) => {
          return (
            <div key={index}>
              <Box
                onClick={() => handleDate(item.numDate)}
                date={item.date}
                numDate={item.numDate}
                className="rounded-lg shadow-md bg-transparent cursor-pointer transition-all delay-75 hover:shadow-xl "
              />
            </div>
          );
        })}
      </div>
      <div className=" bg-gray-50 border border-gray-300 text-gray-900 h-96 text-sm w-full mx-auto p-2.5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <GridLayout
          items={initialUsers}
          className="grid md:grid-cols-5 md:gap-5"
          renderItem={({
            item,
            key,
          }: {
            item: IUser;
            key: string | number;
          }) => {
            return (
              <CardBooking
                image={item.image}
                name={item.name}
                position={item.position}
                className="bg-white card-bottom rounded-lg text-start py-5 px-7 cursor-pointer transition-all delay-75 hover:shadow-lg"
              />
            );
          }}
        />
      </div>
    </div>
  );
}
