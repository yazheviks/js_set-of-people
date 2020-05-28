'use strict';

/**
 * Implement setOfPeople function:
 *
 * You are given an array of numbers. Each of the numbers represents a person. A
 * number in the array may occur just once or it may occur several times, in
 * which case it denotes the same person every time it occurs.
 *
 * You also have a room. Initially the room is empty. Then people start to come
 * into the room in the order they appear in the array. More accurately, if the
 * next number in the array is N, the person N enters the room if he wasn't
 * already in the room or leaves the room in case the person was already in the
 * room at that point.
 *
 * For instance, if the input array is [1, 3, 2, 1, 2, 1], it means that the
 * following has occurred:
 *
 * — person 1 entered the room;
 * — person 3 entered the room;
 * — person 2 entered the room;
 * — person 1 left the room;
 * — person 2 left the room;
 * — person 1 reentered the room.
 *
 * Return a Set that contains the people currently in the room. People who have
 * entered earlier should occur earlier in the Set you return. For the example
 * above, the correct answer is a Set with elements 3, 1 (in that order), as
 * persons 1 and 3 are currently in the room, and 3 entered before 1 (that is,
 * the last (and only) time when 3 entered is before the last time when 1
 * entered). Return an empty set if there are no people in the room.
 *
 * setOfPeople([1, 3, 2, 1, 2, 1]) === new Set(3, 1)
 * setOfPeople([1, 1]) === new Set()
 *
 * @param {number[]} people
 *
 * @return {Set}
 */
function setOfPeople(people) {
  let temp = new Set();

  people.forEach((item) => {
    if (temp.has(item)) {
      temp.delete(item);
    } else {
      temp.add(item);
    }
  });
  return temp;
}

module.exports = setOfPeople;
