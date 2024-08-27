// SmallCalendar.jsx
import Calendar from 'react-calendar';
import { addDays, format, isBefore, parse } from 'date-fns';

const SmallCalendar = ({ expirationDates, onDateClick }) => {
  const today = new Date();
  const oneWeekFromToday = addDays(today, 7);

  const isDateWithinAWeek = (date) => {
    const parsedDate = parse(date, 'dd/MM/yyyy', new Date());
    return isBefore(today, parsedDate) && isBefore(parsedDate, oneWeekFromToday);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = format(date, 'dd/MM/yyyy');
      if (expirationDates.includes(formattedDate) && isDateWithinAWeek(formattedDate)) {
        return 'bg-red-500 text-white';
      }
    }
    return null;
  };

  return (
    <Calendar
      onClickDay={onDateClick}
      tileClassName={tileClassName}
      className="w-full"
    />
  );
};

export default SmallCalendar;
