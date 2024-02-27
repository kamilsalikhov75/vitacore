export enum House {
  Gryffindor = "Gryffindor",
  Slytherin = "Slytherin",
  Hufflepuff = "Hufflepuff",
  Ravenclaw = "Ravenclaw",
}

export interface Character {
  id: string;
  name: string;
  dateOfBirth: string;
  yearOfBirth: number;
  house: House;
}
