import { render, screen, debug } from '@testing-library/react';
import QueryList from '../components/queryList/queryList';
import userEvent from '@testing-library/user-event';
import faker from 'faker';
import { queryList, nominations } from './fakeData';

test('renders stateless component', () => {
  render(<QueryList />);
  expect(screen.getByText("Movie results:")).toBeInTheDocument();
  expect(screen.getByText("Sorry No Movies found Yet ...")).toBeInTheDocument();
});

test('renders query name in heading', () => {
  const query = faker.random.word();
  render(<QueryList  query={query}/>);
  expect(screen.getByText(`Movies result for "${query}" Found:`)).toBeInTheDocument();
});

test('renders loading state when loading prop is true', () => {
  const query = faker.random.word();
  render(<QueryList  query={query} loading={true}/>);
  expect(screen.getByTestId('loading')).toBeInTheDocument();
});

test('renders queryrResults as item card', () => {
  const query = faker.random.word();
  render(<QueryList  query={query} queryResults={queryList} nominations={nominations}/>);
  expect(screen.getAllByTestId('item-card').length).toBe(5);
});