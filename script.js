const array = [
  { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
  { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
  { name: "A. Curry", profession: "kikvorsman", age: 32 },
  { name: "F. Vonk", profession: "slangenmelker", age: 36 },
  { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
  { name: "Dr.Evil", profession: "digital overlord", age: 56 },
];

/*  Ieder item in array moet gedefinieerd worden als name.
    {
    console.log(item.name);
  }  */


/* Geef introductie mee aan console log
 {
    console.log("Dit is " + item.name);
}  */


/*  Geboortejaar loggen
{
  console.log(2021 - item.age);
}   */


/*   Naam + profession loggen  {
console.log(item.name, "is een", item.profession);
}  */


/*  Check of iemand ouder is dan 50 jaar 
 for (let item of array) { 
        if (item.age > 50){
        console.log(item.name, "is 50 jaar of ouder");
}
}