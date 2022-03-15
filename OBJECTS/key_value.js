const pop = {
  name: "Precious",
  age: 20,
  state: "imo",
  likes: ["singing", "eggs", "noodles"],
  disturb: function (who) {
    console.log(`Disturbs ${who}`);
  },
};

console.log(pop.name);
console.log(pop.likes[1]);
pop.likes.push("Sliced Bread");
console.log(pop);
pop.age = pop.age + 2;
console.log(pop);

pop.disturb("Herself");
