'use strict';
// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('Hello скільки фільмів ви переглянули?', '');

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     alert('Ви неправильно відповіли');
//     numberOfFilms = +prompt('Hello скільки фільмів ви переглянули? Від 0 до 100000', '');
//   }

// }

// function detectPersonalLevel() {
//   if (PersonalMovieDB.count <= 10) {
//     alert('Ууу, переглянуто доволі мало фільмів')
//   } else if (PersonalMovieDB.count <= 30) {
//     alert('Ууу, а Ви класичний глядач фільмів')
//   } else if (PersonalMovieDB.count <= 5000) {
//     alert('Уууу, а Ви кіноман')
//   } else if (PersonalMovieDB.count > 5000) {
//     alert('****, щось не вірю вам')
//   } else {alert('Трапилася помилка')}
// }

// start();

// let PersonalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// }

// detectPersonalLevel();

// //levelUp
// function rememberMyFilms() {
//   for (let i = 1; i < 2; i++) {
//     let film = prompt('Котрий був з останніх фільмів?', '');

//     while (film == '' || film == null || film.length > 50 || film.trim() === '') {
//       alert('Ви неправильно відповіли');
//       film = prompt('Котрий був з останніх фільмів?', '');
//     }

//     let rating = +prompt('Як би ви його оцінили? (1 - 10)', '');

//     while (rating == '' || rating == null || isNaN(rating) || rating < 1 || rating > 10) {
//       alert('Ви неправильно відповіли');
//       rating = +prompt('Як би ви його оцінили? Введіть число від 1 до 10', '');
//     }
  
//     if (film != null && rating != null && film != '' && rating != '' && film.length < 50) {
//       PersonalMovieDB.movies[film] = rating;
//       console.log('done');
//     } else {
//       console.log('error');
//       alert('Ви неправильно відповіли, повторіть спробу');
//       i--;
//     }
//   }
// }

// rememberMyFilms();

// function writeYourGenres() {
//   let result;
//   result = prompt('Котрі з трьох ваші улюблені жанри?\n1.Criminal\n2.Horror\n3.Horror Anime xd', '');
//   while (result == '' || result == null || isNaN(result) || result < 1 || result > 3) {
//     alert('Ви неправильно відповіли, введіть число від 1 до 3');
//     result = +prompt('Котрі з трьох ваші улюблені жанри?\n1.Criminal\n2.Horror\n3.Horror Anime xd', '');
//   }

//   if (result == 1) {
//     PersonalMovieDB.genres.push('Criminal');
//   } else if (result == 2) {
//     PersonalMovieDB.genres.push('Horror');
//   } else if (result == 3) {
//     PersonalMovieDB.genres.push('Horror Anime');
//   }

//   result = prompt('Котрі з трьох ваші улюблені жанри?\n1.Action\n2.Drama\n3.Western', '');
//   while (result == '' || result == null || isNaN(result) || result < 1 || result > 3) {
//     alert('Ви неправильно відповіли, введіть число від 1 до 3');
//     result = prompt('Котрі з трьох ваші улюблені жанри?\n1. Action\n2.Drama\n3.Western', '');
//   }

//   if (result == 1) {
//     PersonalMovieDB.genres.push('Action');
//   } else if (result == 2) {
//     PersonalMovieDB.genres.push('Drama');
//   } else if (result == 3) {
//     PersonalMovieDB.genres.push('Western');
//   }

//   result = prompt('Котрі з трьох ваші улюблені жанри?\n1.Fantasy\n2.Adventure\n3.Animation', '');
//   while (result == '' || result == null || isNaN(result) || result < 1 || result > 3) {
//     alert('Ви неправильно відповіли, введіть число від 1 до 3');
//     result = prompt('Котрі з трьох ваші улюблені жанри?\n1.Fantasy\n2.Adventure\n3.Animation', '');
//   }

//   if (result == 1) {
//     PersonalMovieDB.genres.push('Fantasy');
//   } else if (result == 2) {
//     PersonalMovieDB.genres.push('Adventure');
//   } else if (result == 3) {
//     PersonalMovieDB.genres.push('Animation');
//   }
// }

// writeYourGenres();

// if (PersonalMovieDB.privat == false) {
//   console.log('PersonalMovieDB - public')
//   console.log(PersonalMovieDB);
// } else {
//   console.log('PersonalMovieDB - private')
// }

// // another practiceCase_2

// function getMathResult(base, number) {
//   let result = '';
//   if (typeof number === 'string' || typeof number === null || number <= 0) {
//       return base;
//   }
//   for (let i = 1; i <= number; i++) {
//       result += base * i;
//       if (base * i === base * number) {
//         return result;
//       }
//       for (let j = 1; j <= 1; j++) {
//         result += '---';
//     }
//   }
  
//   return result;
// }

// console.log(getMathResult(3, 5));

// another variant

// function getMathResult(base, number) {
//   let result = '';
//   if (typeof number === 'string' || typeof number === null || number <= 0) {
//       return base;
//   }
//   for (let i = 1; i <= number; i++) {
//       result += base * i;
//       if (base * i === base * number) {
//         return result;
//       }
//       result += '---';
//   }
  
//   return result;
// }

// console.log(getMathResult(3, 5));

// another practiceСase_3

function calculateVolumeAndArea2(number) {
  if (number == null || number == '' || typeof number == 'string' || number <= 0 || !Number.isInteger(number)) {
      return 'При вычислении произошла ошибка';
  }
  let volume = number * number * number;
  let area = (number * number) * 6;
  return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea2(5));

// another practiceСase_4

function getCoupeNumber(number) {
  if (number < 0 || !Number.isInteger(number)) {
      return 'Ошибка. Проверьте правильность введенного номера места';
  }
  if ( number == 0 || number > 36) {
      return 'Таких мест в вагоне не существует';
  }
  let result = 0;
  for (let i = 1; i <= number; i++) {
      result = i * 4;
      if (number > result && number <= (i+1) * 4) {
          return i+1;
      } else if (number <= result) {
        return i;
      }
  }
}

console.log(getCoupeNumber(12));

// another practiceСase_5

function getTimeFromMinutes(number) {
  if (number < 0 || !Number.isInteger(number)) {
    return 'Помилка, перевірте введені дані';
  }

  let result,
  hour = 0,
  minutes = 0;

  if (number == 0) {
    return `Це ${number} годин і ${number} хвилин`;
  }

  if (number < 60) {
    return `Це ${hour} годин і ${number} хвилин`;
  } else if (number == 60) {
    hour++;
    return `Це ${hour} година і ${minutes} хвилин`;
  }


  for (let i = 1; i  <= number; i++) {
    result = i * 60;
    if (number > result && number <= (i+1) * 60) {
      hour = i;
      minutes = number - result;
      if (minutes == 60) {
        minutes = 0;
        hour++;
      }
      return `Це ${hour} години і ${minutes} хвилин`;
    }
  }
}

console.log(getTimeFromMinutes(120));

// another practiceСase_6

// need toUpgrade

function findMaxNumber(number1, number2, number3, number4) {
  let core = 0;

  if (number1 == null || number2 == null || number3 == null || number4 == null) {
    return 0;
  }

  let numbers = [number1, number2, number3, number4];
  
  for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] == 'string') {
          return 0;
      }
  }
  
  for (let i = 0; i < numbers.length; i++) {
      if (core < numbers[i]) {
          core = numbers[i];
      }
  }
  return core;

}

console.log(findMaxNumber(1, 5, 6.6, 45, 48));

// another practiceСase_7

function fib(number) {
  if (!Number.isInteger(number) || number == 0) {
      return '';
  } else if (number == 1) {
      return '0';
  }
  let result = [0, 1];
  let resultString = '0 1'
  for (let i = 2; i < number; i++) {
      result[i] = (result[i-2] + result[i-1])
      resultString += ` ${result[i]}`;
  }
  return resultString;
}

console.log(fib(7));

// another practiceСase_8

// function first() {
//   setTimeout(function() {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log('2');
// }

// first();
// second();

// //

// function first(language, callback) {
//   console.log(`Я вивчаю ${language}!`);
//   callback();
// }

// first('JS', function() {
//   console.log('Lets goooo!');
// })

// function done() {
//   console.log('Я навчився юзати колбек!');
// }

// first('JavaScript', done);

// another practiceСase_9

const personalDate = {
  name: 'Myroslav',
  age: '21',
  gender: 'Male',
  money: {
    credit: 500,
    pocket: 200
  }
}

// console.log(personalDate['money']['credit']);

// console.log(personalDate.money.credit);

// console.log(personalDate.money);

// delete personalDate.notebook;

// console.log(personalDate);

// personalDate.notebook = 'HP';

// console.log(personalDate);

let counter = 0;
for (let key in personalDate) {
  if (typeof(personalDate[key]) === 'object') {
    counter++;
    for (let i in personalDate[key]) {
      console.log(`${i} зі значенням ${personalDate[key][i]}`);
    }
  } else {
    console.log(`${key} зі значенням ${personalDate[key]}`);
    counter++;
  }
};
console.log(counter);

console.log(Object.keys(personalDate).length);

// another practiceСase_10

// const arr = [1, 3, 5, 8, 10];

// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: зі значенням ${item}, всередині масиву [${arr}].`)
// })

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  },
  showAgeAndLangs: function(plan) {
    let result = `Мне ${plan.age} и я владею языками: `;
    for (let key in plan.skills.languages) {
        result += plan.skills.languages[key].toUpperCase() + ' ';
    }
    result.slice(0, -1);
    return result;
  }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showProgrammingLangs(plan) {
  let result = '';
  for (let lng in plan.skills.programmingLangs) {
      result += `Язык ${lng} изучен на ${plan.skills.programmingLangs[lng]}\n`;
  }
  return result;
}

console.log(showProgrammingLangs(personalPlanPeter));

// another practiceСase_11

const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const familyNone = [];

function showFamily(arr) {
    if (arr.length === 0) {
        return 'Семья пуста';
    }
    let result = '';
    for (let i of arr) {
        result += i + ' ';
    }
    return `Семья состоит из: ${result}`;
    
}

console.log(showFamily(family));
console.log(showFamily(familyNone));

// another practiceCase_12

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].toLowerCase());
  }
}

//

function standardizeStrings(arr) {
  arr.forEach(city => {
    console.log(city.toLowerCase());
  })
  
}
standardizeStrings(favoriteCities);

// another practiceCase_13

const someString = 'This is some strange string';

function reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;

}

console.log(reverse(someString));

// another practiceCase_14

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  if (arr.length === 0) {
      return 'Нет доступных валют';
  }
  let result = `Доступные валюты:\n`;

      for (let itemAvailable of arr) {
      if (itemAvailable !== missingCurr) {
          result += `${itemAvailable}\n`;
      }
  }
  return result;
}

// upgrade code

const baseCurrencies2 = ['USD', 'EUR'];
const additionalCurrencies2 = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  let str = '';
  arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

  arr.forEach(function(curr, i) {
      if (curr !== missingCurr) {
          str += `${curr}\n`;
      }
  });

  // або
  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === missingCurr) {
  //         continue;
  //     }
  //     str += `${arr[i]}\n`;
  // }

  return str;
}

// another practiceCase_15

const soldier = {
  hp: 300,
  dmg: 100
}

// lvl up 2
const richard = Object.create(soldier);
richard.hp = 500;

// const richard = {
//   hp: 500
// }

// richard.__proto__ = soldier;
// lvl up
// Object.setPrototypeOf(richard, soldier);

console.log(richard);
console.log(richard.dmg);


// another practiceCase_16

let PersonalMovieDBLvlUp = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
  start: function() {
    PersonalMovieDBLvlUp.count = +prompt('Hello скільки фільмів ви переглянули?', '');

    while (PersonalMovieDBLvlUp.count == '' || PersonalMovieDBLvlUp.count == null || isNaN(PersonalMovieDBLvlUp.count)) {
      alert('Ви неправильно відповіли');
      PersonalMovieDBLvlUp.count = +prompt('Hello скільки фільмів ви переглянули? Від 0 до 100000', '');
      }
    },
  detectPersonalLevel: function() {
    if (PersonalMovieDBLvlUp.count <= 10) {
      alert('Ууу, переглянуто доволі мало фільмів')
    } else if (PersonalMovieDBLvlUp.count <= 30) {
      alert('Ууу, а Ви класичний глядач фільмів')
    } else if (PersonalMovieDBLvlUp.count <= 5000) {
      alert('Уууу, а Ви кіноман')
    } else if (PersonalMovieDBLvlUp.count > 5000) {
      alert('****, щось не вірю вам')
    } else {alert('Трапилася помилка')}
  },
  rememberMyFilms: function() {
    for (let i = 1; i < 2; i++) {
      let film = prompt('Котрий був з останніх фільмів?', '');
  
      while (film == '' || film == null || film.length > 50 || film.trim() === '') {
        alert('Ви неправильно відповіли');
        film = prompt('Котрий був з останніх фільмів?', '');
      }
  
      let rating = +prompt('Як би ви його оцінили? (1 - 10)', '');
  
      while (rating == '' || rating == null || isNaN(rating) || rating < 1 || rating > 10) {
        alert('Ви неправильно відповіли');
        rating = +prompt('Як би ви його оцінили? Введіть число від 1 до 10', '');
      }
    
      if (film != null && rating != null && film != '' && rating != '' && film.length < 50) {
        PersonalMovieDBLvlUp.movies[film] = rating;
        console.log('done');
      } else {
        console.log('error');
        alert('Ви неправильно відповіли, повторіть спробу');
        i--;
      }
    }
  },
  writeYourGenres: function() {
    let result;
    result = prompt('Котрі з трьох ваші улюблені жанри?\n1.Criminal\n2.Horror\n3.Horror Anime xd', '');
    while (result == '' || result == null || isNaN(result) || result < 1 || result > 3) {
      alert('Ви неправильно відповіли, введіть число від 1 до 3');
      result = +prompt('Котрі з трьох ваші улюблені жанри?\n1.Criminal\n2.Horror\n3.Horror Anime xd', '');
    }

    if (result == 1) {
      PersonalMovieDBLvlUp.genres.push('Criminal');
    } else if (result == 2) {
      PersonalMovieDBLvlUp.genres.push('Horror');
    } else if (result == 3) {
      PersonalMovieDBLvlUp.genres.push('Horror Anime');
    }

    result = prompt('Котрі з трьох ваші улюблені жанри?\n1.Action\n2.Drama\n3.Western', '');
    while (result == '' || result == null || isNaN(result) || result < 1 || result > 3) {
      alert('Ви неправильно відповіли, введіть число від 1 до 3');
      result = prompt('Котрі з трьох ваші улюблені жанри?\n1. Action\n2.Drama\n3.Western', '');
    }

    if (result == 1) {
      PersonalMovieDBLvlUp.genres.push('Action');
    } else if (result == 2) {
      PersonalMovieDBLvlUp.genres.push('Drama');
    } else if (result == 3) {
      PersonalMovieDBLvlUp.genres.push('Western');
    }

    result = prompt('Котрі з трьох ваші улюблені жанри?\n1.Fantasy\n2.Adventure\n3.Animation', '');
    while (result == '' || result == null || isNaN(result) || result < 1 || result > 3) {
      alert('Ви неправильно відповіли, введіть число від 1 до 3');
      result = prompt('Котрі з трьох ваші улюблені жанри?\n1.Fantasy\n2.Adventure\n3.Animation', '');
    }

    if (result == 1) {
      PersonalMovieDBLvlUp.genres.push('Fantasy');
    } else if (result == 2) {
      PersonalMovieDBLvlUp.genres.push('Adventure');
    } else if (result == 3) {
      PersonalMovieDBLvlUp.genres.push('Animation');
    }
  },
  showDB: function() {
    if (PersonalMovieDBLvlUp.privat == false) {
      console.log('PersonalMovieDBLvlUp - public')
      console.log(PersonalMovieDBLvlUp);
    } else {
      console.log('PersonalMovieDBLvlUp - private')
    }
  },
  toggleVisibleMyDB: () => {
    if (PersonalMovieDBLvlUp.privat == false) {
      PersonalMovieDBLvlUp.privat = true;
    } else {
      PersonalMovieDBLvlUp.privat = false;
    }
  },
  favoriteGenres: () => {
    PersonalMovieDBLvlUp.genres.forEach((genres, i) => {
      console.log(`Ваш улюблений жанр #${i+1} - ${genres}`);
    })
  }
}

PersonalMovieDBLvlUp.start();

PersonalMovieDBLvlUp.detectPersonalLevel();

PersonalMovieDBLvlUp.rememberMyFilms();

PersonalMovieDBLvlUp.writeYourGenres();

PersonalMovieDBLvlUp.favoriteGenres();

PersonalMovieDBLvlUp.toggleVisibleMyDB(); // now private

PersonalMovieDBLvlUp.toggleVisibleMyDB(); // now public

PersonalMovieDBLvlUp.showDB();

// another practiceCase_17

const shoppingMallData = {
  shops: [
      {
          width: 10,
          length: 5
      },
      {
          width: 15,
          length: 7
      },
      {
          width: 20,
          length: 5
      },
      {
          width: 8,
          length: 10
      }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
}

function isBudgetEnough(data) {
  let resultPer1m3 = 0;
  let shops = [];
  data.shops.forEach( shop => {
    const width = shop.width;
    const length = shop.length;
    let per1m3 = width * length * data.height;
    shops.push(per1m3);
    resultPer1m3 += per1m3;
  })
  let moneyNeed = data.moneyPer1m3 * resultPer1m3;
  if (data.budget >= moneyNeed) {
    return console.log(`Бюджета достатньо, тому що ${data.budget} більше ніж потрібно ${moneyNeed}`);
  } else if (data.budget < moneyNeed ) {
    return console.log(`Бюджета недостатньо, тому що ${data.budget} менше ніж потрібно ${moneyNeed}`);
  }
  // console.log(shops);
  // console.log(resultPer1m3);
  // console.log(moneyNeed);
}

isBudgetEnough(shoppingMallData);

// another practiceCase_18

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Tedji'];

function sortStudentsByGroups(arr) {
  namesRegistry = arr.sort((a, b) => {
    return a.localeCompare(b);
  });

  let commandOne = [], commandTwo = [], commandThree = [], otherPlayers = [];
  namesRegistry.forEach(name => {
    if (commandOne.length < 3) {
      commandOne.push(name);
    } else if (commandTwo.length < 3) {
      commandTwo.push(name);
    } else if (commandThree.length < 3) {
      commandThree.push(name);
    } else {
      otherPlayers.push(name);
    }
  })
  let result = [];
  result.push(commandOne);
  result.push(commandTwo);
  result.push(commandThree);

  let strResult = 'Оставшиеся студенты: ';
  if (otherPlayers.length === 0) {
    strResult + '-';
  } else {
    otherPlayers.forEach(name => {
      strResult += `${name} `;
    })
    strResult = strResult.slice(0, -1);
    result.push(strResult);
  }
  console.log(otherPlayers);
  console.log(result);

}

sortStudentsByGroups(students);

// lvlUp

let students1 = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Tedji'];

function sortStudentsByGroups(arr) {
  let namesRegistry = arr.sort();

  let commandOne = [], commandTwo = [], commandThree = [], otherPlayers = [];
  namesRegistry.forEach(name => {
    if (commandOne.length < 3) {
      commandOne.push(name);
    } else if (commandTwo.length < 3) {
      commandTwo.push(name);
    } else if (commandThree.length < 3) {
      commandThree.push(name);
    } else {
      otherPlayers.push(name);
    }
  })
  
  return console.log([commandOne, commandTwo, commandThree, `Оставшиеся студенты: ${otherPlayers.length === 0 ? '-' : otherPlayers.join(', ')}`])
}

sortStudentsByGroups(students1);

// another practiceCase_19

// function createCounter() {
//   let counter = 0
//   const myFunction = function() {
//     counter = counter + 1
//     return counter
//   }
//   return myFunction
// }
// const increment = createCounter()
// const c1 = increment()
// const c2 = increment()
// const c3 = increment()
// console.log('example increment', c1, c2, c3);

////

// let c = 4
// const addX = x => n => n + x
// const addThree = addX(3)
// let d = addThree(c)
// console.log('example partial application', d)

//

// let c = 4
// function addX(x) {
//   return function(n) {
//      return n + x
//   }
// }
// const addThree = addX(3)
// let d = addThree(c)
// console.log('example partial application', d)

// another practiceCase_20