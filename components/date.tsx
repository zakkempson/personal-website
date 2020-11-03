import { parseISO, format, differenceInWeeks } from 'date-fns';

interface DateI {
  dateString: string;
  specificity?: 'day' | 'month';
}

export const Date = (props: DateI) => {
  const { dateString, specificity = 'day' } = props;
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, `LLLL ${specificity === 'day' ? 'd' : ''} yyyy`)}
    </time>
  );
};

export const DateDuration = ({ startDateString, endDateString }) => {
  const startDate = parseISO(startDateString);
  const endDate = parseISO(endDateString);

  return <span>{differenceInWeeks(endDate, startDate)} weeks</span>;
};
