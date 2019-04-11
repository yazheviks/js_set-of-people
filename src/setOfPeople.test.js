'use strict';

const setOfPeople = require('./setOfPeople');

test('No people', () => {
  expect([...setOfPeople([]).values()])
    .toEqual([]);
});

test('Single person', () => {
  expect([...setOfPeople([23]).values()])
    .toEqual([23]);
});

test('Single person reentering', () => {
  expect([...setOfPeople([23, 23, 23]).values()])
    .toEqual([23]);
});

test('Single person leaving', () => {
  expect([...setOfPeople([23, 23, 23, 23]).values()])
    .toEqual([]);
});

test('Sample test', () => {
  expect([...setOfPeople([1, 3, 2, 1, 2, 1]).values()])
    .toEqual([3, 1]);
});

test('5 people, no one leaving', () => {
  expect([...setOfPeople([3, 2, 5, 4, 1]).values()])
    .toEqual([3, 2, 5, 4, 1]);
});

test('10 people, 20 events', () => {
  expect(
    [...setOfPeople([3, 1, 8, 8, 2, 1, 9, 0, 3, 6, 9, 1, 5, 0, 2, 0, 1,
      8, 5, 7]).values()])
    .toEqual([6, 0, 8, 7]);
});

test('20 people, 100 events', () => {
  expect(
    [...setOfPeople([12, 8, 1, 18, 3, 3, 4, 8, 11, 1, 14, 5, 5, 0, 1, 15,
      0, 10, 16, 12, 2, 9, 17, 14, 9, 13, 6, 4, 5, 0, 0, 1, 1, 7, 3, 13, 16, 14,
      19, 15, 6, 16, 5, 5, 10, 6, 6, 13, 11, 1, 11, 0, 6, 8, 15, 10, 6, 17, 13,
      15, 5, 1, 4, 16, 4, 7, 6, 7, 7, 11, 14, 5, 6, 11, 15, 1, 5, 10, 16, 4, 15,
      17, 12, 3, 10, 3, 19, 11, 15, 19, 15, 2, 14, 11, 19, 8, 2, 7, 6, 1])
      .values()])
    .toEqual([18, 0, 16, 4, 17, 12, 10, 3, 14, 11, 2, 7, 6, 1]);
});
