const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
// długość hasła
let dlugosc = 12;
// zmienna na hasło
let haslo = "";
// tworze zmienną o nazwie Password1 aby przechowywać w niej wartość password1 i ją zmieniać
let Password1 = document.getElementById("password1");
//  chujowo robie drugą zmienną
let Password2 = document.getElementById("password2");

// tworzę funkcję, która generuje losowe hasło o długości krótszej niż 8 znaków
function generateRandom() {
  for (var i = 0; i < dlugosc; i++) {
    // tworzę zmienną losowyIndeks która przechowuje losową wartość pobraną z tablicy znaków na samej górze
    var losowyIndeks = Math.floor(Math.random() * characters.length);
    // do utworzonej wcześniej zmiennej hasło dopisuję kolejny znak aż nie osiągnie łącznej długości 8 znaków
    haslo = haslo + characters[losowyIndeks];
    // zmieniam wartość password1 na wygenerowane hasło
    Password1.textContent = haslo;
  }
  //   resetuję hasło żeby nie dopisywało ciągle kolejnych generowanych 8 znaków będących nowym hasłem
  haslo = "";
}

// drugi raz ta sama funkcja ale na drugiego diva
function generateRandom2() {
  for (var i = 0; i < dlugosc; i++) {
    // tworzę zmienną losowyIndeks która przechowuje losową wartość pobraną z tablicy znaków na samej górze
    var losowyIndeks = Math.floor(Math.random() * characters.length);
    // do utworzonej wcześniej zmiennej hasło dopisuję kolejny znak aż nie osiągnie łącznej długości 8 znaków
    haslo = haslo + characters[losowyIndeks];
    // zmieniam wartość password1 na wygenerowane hasło
    Password2.textContent = haslo;
  }
  //   resetuję hasło żeby nie dopisywało ciągle kolejnych generowanych 8 znaków będących nowym hasłem
  haslo = "";
}
