const monarchCats = ['Garfield', 'Simba', 'Felix', 'Tom'];

export const morningGreet = (name: string) => {
  let greet = 'Good morning ';

  if (monarchCats.includes(name)) {
    greet = 'Good morning, your Majesty, ';
  }

  return `${greet}${name}`;
};
