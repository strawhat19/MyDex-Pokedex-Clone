export default class User {
  constructor(
    name,
    id,
    index,
    email,
    password,
    pokemon,
    friends
  ) {
    this.name = name;
    this.id = id;
    this.index = index;
    this.email = email;
    this.password = password;
    this.pokemon = pokemon;
    this.friends = friends;
  }
}

// Model
/* 
User {
  name: input[username],
  id: 0,
  index: 0,
  email: input[email],
  password: input[password],
  pokemon: [],
  friends: []
} 
 */
