// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    name: "mrGreen",
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    color: "green",
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    description: "He has a lot of connections",
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    color: "white",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    color: "purple",
    image:
      "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    description: "Billionaire video game designer",
  },
  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    color: "red",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    description: "She is an A-list movie star with a dark past",
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    color: "blue",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    color: "yellow",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    description:
      "He is a former football player who tries to get by on his former glory",
  },
];

// Rooms Array

const roomsArray = [
  { name: "Dining Room" },
  { name: "Conservatory" },
  { name: "Kitchen" },
  { name: "Study" },
  { name: "Library" },
  { name: "Billiard Room" },
  { name: "Lounge" },
  { name: "Ballroom" },
  { name: "Hall" },
  { name: "Spa" },
  { name: "Living Room" },
  { name: "Observatory" },
  { name: "Theater" },
  { name: "Guest House" },
  { name: "Patio" },
];

// Weapons Array

const weaponsArray = [
  { name: "rope", weight: 10 },
  { name: "knife", weight: 8 },
  { name: "candlestick", weight: 2 },
  { name: "dumbbell", weight: 30 },
  { name: "poison", weight: 2 },
  { name: "axe", weight: 15 },
  { name: "bat", weight: 13 },
  { name: "trophy", weight: 25 },
  { name: "pistol", weight: 20 },
];

// ITERATION 2

function selectRandom(suspectsArray) {
  let random = suspectsArray[Math.floor(Math.random() * suspectsArray.length)];
  return random;
}

// ITERATION 2.1

function pickMystery () {
 let suspect = selectRandom(suspectsArray);
 let weapon = selectRandom(weaponsArray);
 let room = selectRandom(roomsArray);

 const mystery = {
  suspect: suspect,
  weapon: weapon,
  room: room,
 } 
  return mystery;
}

// ITERATION 3

function revealMystery(object) {
  let killerName = object["suspect"].firstName;
  let killerLastName = object["suspect"].lastName;
  let killerRoom = object["room"].name;
  let killerWeapon = object["weapong"].name;

  let killer = `${killerName} ${killerLastName} killed Mr. Boddy using the ${killerWeapon} in the ${killerRoom}!`

  return killer;
}
