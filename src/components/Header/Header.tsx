import { MeasurementButton } from './MeasurementButton';
import { SearchBar } from './SearchBar';

export const Header = () => {
  return (
    <div className="flex items-center p-2 justify-evenly">
      <MeasurementButton />
      <SearchBar />
    </div>
  );
};
