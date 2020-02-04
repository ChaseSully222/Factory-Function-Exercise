//factory function that creates an object that represents a doctor
//Lightning Exercise 1

const createDoctor = (name, specialty, address) => {
  return {
    name: name,
    specialty: specialty,
    address: address
  };
};

const drJimmy = createDoctor("jimmy", "oncologist", "123 Main St");

const drPepper = createDoctor("pepper", "dentist", "123 Soda Rd");

// Lightning Exercise 2

const createDog = (name, breed) => {
  return {
    name: name,
    breed: breed
  };
};

const jade = createDog("Jade", "Husky");

const rambo = createDog("Rambo", "pitbull");

const steve = createDog("steve", "steve");

const bowWowKennels = [
  createDog("Jade", "Husky"),
  createDog("rambo", "pitbull"),
  createDog("steve", "lab")
];
console.log("bowWowKennels", bowWowKennels);

//Practice: Music Row

const createFunkArtists = (artist, age) => {
  return {
    artist: artist,
    genre: "Funk",
    age: age
  };
};
const createRapArtists = (artist, age) => {
  return {
    artist: artist,
    genre: "Rap",
    age: age
  };
};
const createCountryArtists = (artist, age) => {
  return {
    artist: artist,
    genre: "Country",
    age: age
  };
};
const createBluegrassArtists = (artist, age) => {
  return {
    artist: artist,
    genre: "Bluegrass",
    age: age
  };
};
const createPopArtists = (artist, age) => {
  return {
    artist: artist,
    genre: "Pop",
    age: age
  };
};

const bruce = createCountryArtists("Bruce Atikins", "23");
const jensen = createPopArtists("Jensen Brown", "20");
const dreFunkz = createFunkArtists("Dre Funkz", "25");
const dusta = createRapArtists("Dusta Grimes", "21");
const barth = createBluegrassArtists("Bartholomew Danielson", "23");
const avilee = createCountryArtists("Avilee Dallas", "19");
const austin = createPopArtists("Austin Kinkaid", "22");
const loyonce = createRapArtists("Loyonce Branis", "27");


const chattenRecords = [
  createCountryArtists("Bruce Atikins", "23"),
  createCountryArtists("Avilee Dallas", "19"),
  createBluegrassArtists("Bartholomew Danielson", "23")
];

const jumpStopRecords = [
  createFunkArtists("Dre Funkz", "25"), 
  createRapArtists("Dusta Grimes", "21"),
  createRapArtists("Loyonce Branis", "27")
  ];

  const polarRecords = [
    createPopArtists("Jensen Brown", "20"),
    createPopArtists("Austin Kinkaid", "22"),
  ];

console.log("chattenRecords", chattenRecords);
console.log("jumpStopRecords", jumpStopRecords);
console.log("polarRecords", polarRecords);
