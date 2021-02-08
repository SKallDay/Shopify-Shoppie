import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import {queryList, fetchMovies} from './fakeData';
// import axios from 'axios';
// jest.mock('axios');

function fetchMock(url, suffix = "") {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        json: () =>
          Promise.resolve({
            data: url + suffix,
          }),
      });
    }, 200 + Math.random() * 300)
  );
}


test('renders app', () => {
  render(<App />);
  const title = screen.getByText("The Shoppies");
  expect(title).toBeInTheDocument();
});

test('renders all components on set up', () => {
  render(<App />);
  expect(screen.getByText("The Shoppies")).toBeInTheDocument();
  expect(screen.getByText("Search:")).toBeInTheDocument();
  expect(screen.getByText("Nominations")).toBeInTheDocument();
  expect(screen.getByText("Movie results:")).toBeInTheDocument();
});

test('submits query', async () => {
  render(<App />);
  expect(screen.getByText("The Shoppies")).toBeInTheDocument();
  await userEvent.type(screen.getByRole('textbox'), 'Harry Potter {enter}');
  expect(screen.getByTestId('loading')).toBeInTheDocument();
});


// can add movie to nomination list 

// can remove nominee from nomination list 

// if nomination array 