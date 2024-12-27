export interface Instructor {
  id: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const instructors: Instructor[] = [
  {
    id: 'instructor@extion.com',
    password: 'password123',
    firstName: 'John',
    lastName: 'Doe'
  }
];