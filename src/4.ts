class Key {
  private signature: string;

  constructor() {
    this.signature = this.createSignature();
  }

  private createSignature(): string {
    return Math.random().toString(36).substring(2);
  }

  getSignature(): string {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: boolean;
  key: Key;
  tenants: Person[] = [];

  constructor(door: boolean, key: Key) {
    this.door = door;
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door === true) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(false, key);
  }

  openDoor(key: Key): boolean {
    if (this.key === key) {
      this.door = true;
      return true;
    }
    return false;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
