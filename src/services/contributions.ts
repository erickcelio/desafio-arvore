import { IContribution } from '../components/Calendar';

export const getContributions = async (): Promise<IContribution[]> => {
  const response = await fetch('http://localhost:3001/contributions');

  return response.json();
};

export const countContributions = (
  contributions: IContribution[],
  year: number,
): number => {
  return contributions.reduce<number>((acc, contribution) => {
    const [contributionYear] = contribution.date.split('-');
    return parseInt(contributionYear, 10) === year
      ? acc + contribution.count
      : acc;
  }, 0);
};
