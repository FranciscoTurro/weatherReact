import { useQuery } from 'react-query';
import { fetchCity } from '../api/fetchCity';
import { BarLoader } from 'react-spinners';
interface Props {
  city: string;
}

export const Weather: React.FC<Props> = ({ city }) => {
  const { data, isLoading, isError } = useQuery(city, () => fetchCity(city));

  if (isLoading) return <BarLoader color="white" />;

  if (isError) return <div>{isError}</div>;

  return <div>{JSON.stringify(data.sys.country)}</div>;
};
