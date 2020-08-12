export interface dayObject {
  day: string;
  year: number;
  dayNumberInWeek: number;
  date: string;
  month: number;
  monthName: string;
}

interface monthAndYear {
  month: number;
  year: number;
}

const daysInMonth = (month: number, year: number): dayObject[] => {
  const date = new Date(year, month, 0);

  const monthName = date.toLocaleDateString('en-US', { month: 'short' });

  const days = new Array(date.getDate()).fill(null).map((_, day) => {
    const newDate = new Date(year, month - 1, day + 1);

    return {
      day: newDate.toLocaleDateString('en-US', { day: '2-digit' }),
      dayNumberInWeek: newDate.getDay(),
      month,
      date: newDate.toISOString().slice(0, 10),
      monthName,
      year,
    };
  });

  return days;
};

const daysInMonthAndYear = (monthAndYear: monthAndYear[]): dayObject[] =>
  monthAndYear.reduce<dayObject[]>(
    (acc, { month, year }) => [...acc, ...daysInMonth(month, year)],
    [],
  );

const getDaysInYear = (year: number) => {
  const monthsAndYear = new Array(new Date(year).getMonth() + 1)
    .fill(null)
    .map((_, month) => ({
      month: month + 1,
      year,
    }));

  return daysInMonthAndYear(monthsAndYear);
};

const getDaysInYears = (years: number[]) =>
  years.reduce<dayObject[]>(
    (acc, year) => [...acc, ...getDaysInYear(year)],
    [],
  );

const splitDaysInWeeks = (days: dayObject[]): dayObject[][] =>
  days.reduce<dayObject[][]>((acc, day) => {
    if (day.dayNumberInWeek === 0 || !acc[acc.length - 1]) {
      return [...acc, [day]];
    }

    acc[acc.length - 1].push(day);

    return acc;
  }, []);

export function getWeekDaysFromYears(
  years: number[],
  limitWeeks?: number | null,
): dayObject[][] {
  const days = getDaysInYears(years);
  const weeks = splitDaysInWeeks(days);

  if (limitWeeks) {
    return weeks.slice(0).reverse().slice(0, limitWeeks).reverse();
  }

  return weeks;
}
