/*
class와 Int32Array를 이용하여 Array List를 구현한다.
Int32Array의 용량(capacity)은 고정되어 있다고 가정한다.
배열의 크기가 부족할 때 마다 2배 길이의 Int32Array를 새로 생성한다.

다음과 같은 리스트 ADT의 연산자를 구현해야 한다.
  비어있는 리스트를 생성하는 생성자
  리스트가 비어있는지 확인하는 연산자
  리스트의 앞에 개체를 삽입(prepending)하는 연산자
  리스트의 뒤에 개체를 삽입(appending)하는 연산자
  리스트의 첫 머리(head)를 결정하는 연산자
  주어진 인덱스에 해당하는 요소에 접근하는 연산자
  주어진 인덱스에 새로운 요소를 삽입하는 연산자
  주어진 인덱스에 해당하는 요소를 제거하는 연산자
*/
class ArrayList {
  constructor(capacity) {
    this.capacity = capacity;
    this.array = new Int32Array(capacity);
    this.length = 0;
  }

  isEmpty() {
    console.log(!this.length && true);
    return !this.length && true;
  }

  prepend(value) {
    this.insert(0, value);
  }

  append(value) {
    this.insert(this.length, value);
  }

  setHead(index) {
    if (index < this.length) {
      this.array = this.array.slice(index);
      this.capacity -= index;
      this.length -= index;
    }
  }

  access(index) {
    if (index >= this.length) {
      return undefined;
    }
    return this.array[index];
  }

  insert(index, value) {
    if (this.length === this.capacity) {
      this.capacity *= 2;
      const newArray = new Int32Array(this.capacity);
      for (let i = 0; i < index; i++) {
        newArray[i] = this.array[i];
      }
      for (let i = index; i < this.length; i++) {
        newArray[i + 1] = this.array[i];
      }
      this.array = newArray;
    } else {
      for (let i = this.length - 1; i >= index; i--) {
        this.array[i + 1] = this.array[i];
      }
    }
    this.array[index] = value;
    this.length++;
  }

  remove(index) {
    if (index >= this.length) {
      return false;
    }

    for (let i = index + 1; i < this.length; i++) {
      this.array[i - 1] = this.array[i];
    }
    this.length--;
    return true;
  }

  print() {
    let s = '';
    for (let i = 0; i < this.length; i++) {
      s += this.array[i] + ' ';
    }
    console.log(s);
  }
}

const myList = new ArrayList(8);
myList.isEmpty();
myList.print();

for (let i = 0; i < 10; i++) {
  myList.append(i + 1);
}
myList.print();

for (let i = 0; i < 10; i++) {
  myList.prepend(i + 1);
}
myList.print();

const value = myList.access(3);
console.log(`myList.access(3) = ${value}`);

myList.insert(8, 128);
myList.print();

myList.remove(4);
myList.print();

myList.setHead(10);
myList.print();

myList.isEmpty();
