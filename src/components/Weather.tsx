import { useQuery } from 'react-query';
import { fetchCity } from '../api/fetchCity';
import { BarLoader } from 'react-spinners';

interface Props {
  city: string;
}

export const Weather: React.FC<Props> = ({ city }) => {
  const { data, isLoading } = useQuery(city, () => fetchCity(city), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  if (isLoading) return <BarLoader color="white" />;

  if (data.cod !== 200) return <div>error</div>;

  return <div>{JSON.stringify(data.sys.country)}</div>;
};
