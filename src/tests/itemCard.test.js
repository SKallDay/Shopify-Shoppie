import { render, screen } from '@testing-library/react';
import ItemCard from '../components/itemCard/itemCard';
import userEvent from '@testing-library/user-event';
import { nominations } from './fakeData';

const item = nominations[0];

test('renders component', () => {
  render(<ItemCard item={item} nominations={nominations} />);
  expect(screen.getByText(`${item.Title} (${item.Year})`)).toBeInTheDocument();
  expect(screen.getByAltText(`${item.Title} movie poster`)).toBeInTheDocument();
});


test('handles addToNominations prop', async () => {
  const addToNominations = jest.fn();
  render(<ItemCard item={nominations[4]} nominations={[]} addToNominations={addToNominations}/>);
    
  userEvent.click(screen.getByTestId('add-to-nominations'));

  expect(addToNominations).toHaveBeenCalledTimes(1);
});

test('button disabled if included in nominations list', async () => {
  const addToNominations = jest.fn();
  render(<ItemCard item={item} nominations={nominations} addToNominations={addToNominations}/>);
    
  userEvent.click(screen.getByTestId('disabled'));
  
  expect(addToNominations).toHaveBeenCalledTimes(0);
});