import { render, screen } from '@testing-library/react';
import Banner from '../components/banner/banner';

test('renders component', () => {
  const nominations = [1,2,3,4,5]
  render(<Banner nominations={nominations} />);
  expect(screen.getByText(`You've Selected ${nominations.length} Nominations`)).toBeInTheDocument();
});
