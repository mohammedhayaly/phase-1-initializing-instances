class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.dessert = dessert; // No # symbol for dessert, it's not private
  }
}

let breakfast1 = new Breakfast("Toast", "Orange Juice");
let lunch1 = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");
let dinner1 = new Dinner("Greek Salad", "Mushroom Soup", "Grilled Salmon", "Cheesecake");

console.log(breakfast1); // Breakfast { food: 'Toast', drink: 'Orange Juice' }
console.log(lunch1); // Lunch { salad: 'Caesar Salad', soup: 'Tomato Soup', drink: 'Iced Tea' }
console.log(dinner1); // Dinner { salad: 'Greek Salad', soup: 'Mushroom Soup', entree: 'Grilled Salmon', dessert: 'Cheesecake' }