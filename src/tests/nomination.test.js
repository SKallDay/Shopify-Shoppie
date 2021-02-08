import { render, screen } from '@testing-library/react';
import Nominations from '../components/nomination/nomination';
import userEvent from '@testing-library/user-event';
import { nominations } from './fakeData';


test('renders component', () => {
  render(<Nominations />);
  expect(screen.getByText('Nominations')).toBeInTheDocument();
});

test('renders nominations tiles', () => {
  render(<Nominations nominations={nominations} />);
  expect(screen.getAllByTestId('data-test-nominations').length).toBe(5);
});

test('handles removeNominee prop', async () => {
  const removeNominee = jest.fn();
  render(<Nominations nominations={nominations} removeNominee={removeNominee}/>);
    
  userEvent.click(screen.getByTestId(`0`))

  expect(removeNominee).toHaveBeenCalledTimes(1);
});