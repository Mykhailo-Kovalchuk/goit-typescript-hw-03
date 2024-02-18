


class Key {
    private signature: number;
 constructor () {
    this.signature = Math.random();
    }
    
getSignature():number {
    return this.signature;
 }
}

class Person {
      constructor (private key: Key) {
this.key = key;     
    }
    getKey (): Key {
return this.key;
    }
}

abstract class House {
   protected door: boolean;
   protected key: Key;
   protected tenants: Person[] = [];


constructor (key: Key) { 
    this.key = key;
}

comeIn(person: Person): void {
if (this.door) {
    this.tenants.push(person);
} else {
    console.log("The door is closed.");
}
}
abstract  openDoor (doorKey: Key): void;
}


class MyHouse extends House {
constructor(key: Key) {
    super(key);
    this.door = false; // Двері зачинені від початку
}
    openDoor(doorKey: Key): void { // Реалізовуємо метод відкриття дверей
        if (doorKey.getSignature() === this.key.getSignature()) { // перевіряємо чи ключ співпадає
            this.door = true; // і якщо так тоді відчиняємо двері
        } else { // якщо ні тоді зачинені і залишаються.
            console.log("Door is closed. Try another key.")
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};