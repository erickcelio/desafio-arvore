import { IContribution } from '../components/Calendar';

export const getContributions = async (): Promise<IContribution[]> => {
  const response = await fetch('http://localhost:3001/contributions');

  return response.json();
};
