import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { queryList } from "./fakeData";

test("renders app", () => {
  render(<App />);
  const title = screen.getByText("The Shoppies");
  expect(title).toBeInTheDocument();
});

test("renders all components on set up", () => {
  render(<App />);
  expect(screen.getByText("The Shoppies")).toBeInTheDocument();
  expect(screen.getByText("Search:")).toBeInTheDocument();
  expect(screen.getByText("Nominations")).toBeInTheDocument();
  expect(screen.getByText("Movie results:")).toBeInTheDocument();
});

test("submits query", async () => {
  render(<App />);
  expect(screen.getByText("The Shoppies")).toBeInTheDocument();
  await userEvent.type(screen.getByRole("textbox"), "Harry Potter {enter}");
  expect(screen.getByTestId("loading")).toBeInTheDocument();
});

test("displays queryResults", async () => {
  const fetchMovies = global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          Search: queryList
        }),
    })
  );

  await act(async() => render(<App/>));
  
  await waitFor(() => expect(fetchMovies).toHaveBeenCalledTimes(1))
  expect(screen.getAllByTestId("item-card").length).toBe(5);
});

test("can add movie to nomination list", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          Search: queryList
        }),
    })
  );
  await act(async() => render(<App/>));

  expect(screen.queryAllByTestId("data-test-nominations").length).toBe(0);
  userEvent.click(screen.getAllByTestId('add-to-nominations')[0]);
  expect(screen.getAllByTestId("nomination").length).toBe(1);
});

test("can remove movie to nomination list", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          Search: queryList
        }),
    })
  );
  await act(async() => render(<App/>));

  expect(screen.queryAllByTestId("nominations").length).toBe(0);
  userEvent.click(screen.getAllByTestId('add-to-nominations')[0]);
  userEvent.click(screen.getAllByTestId('add-to-nominations')[1]);
  userEvent.click(screen.getAllByTestId('add-to-nominations')[2]);
  expect(screen.getAllByTestId("nomination").length).toBe(3);

  userEvent.click(screen.getAllByTestId('remove-nominee')[2]);

  expect(screen.getAllByTestId("nomination").length).toBe(2);
});

test("displays banner when 5 nominees selected", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          Search: queryList
        }),
    })
  );
  await act(async() => render(<App/>));

  userEvent.click(screen.getAllByTestId('add-to-nominations')[4]);
  userEvent.click(screen.getAllByTestId('add-to-nominations')[3]);
  userEvent.click(screen.getAllByTestId('add-to-nominations')[2]);

  userEvent.click(screen.getAllByTestId('add-to-nominations')[1]);
  userEvent.click(screen.getAllByTestId('add-to-nominations')[0]);
  expect(screen.getAllByTestId("nomination").length).toBe(5);
  
  expect(screen.getByText("You've Selected 5 Nominations")).toBeInTheDocument();
});

