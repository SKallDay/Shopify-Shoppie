import faker from 'faker';

const queryList = [
  {
    Title: faker.random.words(),
    Year: faker.random.number(),
    Poster: faker.image.imageUrl(),
  },
  {
    Title: faker.random.words(),
    Year: faker.random.number(),
    Poster: faker.image.imageUrl(),
  },
  {
    Title: faker.random.words(),
    Year: faker.random.number(),
    Poster: faker.image.imageUrl(),
  },
  {
    Title: faker.random.words(),
    Year: faker.random.number(),
    Poster: faker.image.imageUrl(),
  },
  {
    Title: faker.random.words(),
    Year: faker.random.number(),
    Poster: faker.image.imageUrl(),
  }
];

const nominations = [
  {
    Title: faker.random.words(),
    Year: faker.random.number(),
    Poster: faker.image.imageUrl(),
  },
  {
    Title: faker.random.words(),
    Year: faker.random.number(),
    Poster: faker.image.imageUrl(),
  },
  {
    Title: faker.random.words(),
    Year: faker.random.number(),
    Poster: faker.image.imageUrl(),
  },
  {
    Title: faker.random.words(),
    Year: faker.random.number(),
    Poster: faker.image.imageUrl(),
  },
  {
    Title: faker.random.words(),
    Year: faker.random.number(),
    Poster: faker.image.imageUrl(),
  }
];

export {nominations, queryList};