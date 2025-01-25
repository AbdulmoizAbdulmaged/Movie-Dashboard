
import { render,test,expect } from '@testing-library/react';
import MovieItem from './MovieItem';

const movie = {
  id: 1,
  title: "The Shawshank Redemption",
  year: "1994",
  genre: ["Drama"],
  country: ["USA"],
  imdb_rating: 9.3,
  oscar_nominations: 7,
  oscar_winning: 0,
  cast: ["Tim Robbins", "Morgan Freeman"],
  language: ["English"],
  oscar_nominations_list: [
    "Best Picture",
    "Best Actor",
    "Best Supporting Actor",
    "Best Director",
    "Best Adapted Screenplay",
    "Best Cinematography",
    "Best Film Editing"
  ],
  oscar_winning_list: []
};

test('renders MovieItem with title', () => {
  const { getByText } = render(<MovieItem movie={movie} />);
  expect(getByText('The Shawshank Redemption')).toBeInTheDocument();
});

test('renders MovieItem with year', () => {
  const { getByText } = render(<MovieItem movie={movie} />);
  expect(getByText('1994')).toBeInTheDocument();
});

test('renders MovieItem with genre', () => {
  const { getByText } = render(<MovieItem movie={movie} />);
  expect(getByText('Drama')).toBeInTheDocument();
});

test('renders MovieItem with country', () => {
  const { getByText } = render(<MovieItem movie={movie} />);
  expect(getByText('USA')).toBeInTheDocument();
});

test('renders MovieItem with IMDB rating', () => {
  const { getByText } = render(<MovieItem movie={movie} />);
  expect(getByText('9.3')).toBeInTheDocument();
});

test('renders MovieItem with Oscar nominations', () => {
  const { getByText } = render(<MovieItem movie={movie} />);
  expect(getByText('7')).toBeInTheDocument();
});

test('renders MovieItem with Oscar wins', () => {
  const { getByText } = render(<MovieItem movie={movie} />);
  expect(getByText('0')).toBeInTheDocument();
});

test('renders MovieItem with cast', () => {
  const { getByText } = render(<MovieItem movie={movie} />);
  expect(getByText('Tim Robbins, Morgan Freeman')).toBeInTheDocument();
});

test('renders MovieItem with language', () => {
  const { getByText } = render(<MovieItem movie={movie} />);
  expect(getByText('English')).toBeInTheDocument();
});

test('renders MovieItem with Oscar nominations list', () => {
  const { getByText } = render(<MovieItem movie={movie} />);
  expect(getByText('Best Picture, Best Actor, Best Supporting Actor, Best Director, Best Adapted Screenplay, Best Cinematography, Best Film Editing')).toBeInTheDocument();
});

test('renders MovieItem with Oscar winning list', () => {
  const { getByText } = render(<MovieItem movie={movie} />);
  expect(getByText('')).toBeInTheDocument();
});