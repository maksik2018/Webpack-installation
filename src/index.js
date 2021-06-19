import "./styles/main.scss";

class Test {
  constructor(item) {
    this.item = item;
  }

  consoleItem() {
    console.log(this.item);
  }
}

const test1 = new Test("Привет");

test1.consoleItem();