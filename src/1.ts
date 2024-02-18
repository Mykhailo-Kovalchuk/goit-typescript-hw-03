/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/



// class Student {
//   // public name: string;
//   // public age: number;
//   // public grade: string;

//   constructor(public name: string, public age: number, public grade: string) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
// }

// export {};



class Student {
  constructor(public name: string, public age: number, public grade: string) {
// немає сенсу явнь прописувати властивосі і значення в тілі конструктора, бо TS робить це під капотом
// в принципі це могло б виглядати так:
//     name = name;
//     age = age;
//     grade = grade;
// але це просто зайвий код.
  }
}

export {};