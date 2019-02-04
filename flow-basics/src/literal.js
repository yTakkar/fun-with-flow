// @flow

const acceptsFive = (value: 5): number => value
acceptsFive(3)
acceptsFive(5)

const getColor = (country: "england" | "norway" | "austria") => {
  switch (country) {
    case "england" : return "London";
    case "norway" : return "Oslo";
    case "austria"  : return "Vienna";
    case "newZealand": return "Christchurch"
  }
}
getColor('england')
getColor('newZealand')
