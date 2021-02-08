import { render, screen } from '@testing-library/react';
import SearchBar from '../components/searhBar/searchBar';
import userEvent from '@testing-library/user-event';

test('renders component', () => {
  render(<SearchBar />);
  expect(screen.getByText("Search:")).toBeInTheDocument();
});

test('handles queryBySearch prop on form submit', async () => {
  const queryBySearch = jest.fn();
  render(<SearchBar queryBySearch={queryBySearch}/>);
  
  await userEvent.type(screen.getByRole('textbox'), 'Harry Potter {enter}');

  expect(queryBySearch).toHaveBeenCalledTimes(1);
});
