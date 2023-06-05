function node(value = null, nextNode = null) {
  return {
    value: value,
    nextNode: nextNode,
  };
}

function LinkedList() {
  let head = null;
  return {
    prepend: function (value) {
      head = node(value, head);
    },
    append: function (value) {
      if (head === null) {
        head = node(value, null);
      } else {
        let tmp = head;
        while (tmp.nextNode !== null) {
          tmp = tmp.nextNode;
        }
        tmp.nextNode = node(value, null);
      }
    },
    size: function () {
      let total = 0;
      let tmp = head;
      while (tmp !== null) {
        total += 1;
        tmp = tmp.nextNode;
      }
      return total;
    },
    getHead: function () {
      if (head === null) {
        return null;
      } else return head;
    },
    tail: function () {
      let tmp = head;
      if (head === null) {
        return null;
      } else {
        while (tmp.nextNode !== null) {
          tmp = tmp.nextNode;
        }
      }
      return tmp;
    },
    at: function (key) {
      let tmp = head;
      let index = 0;
      if (head === null) {
        return null;
      } else {
        while (tmp.nextNode !== null && index !== key) {
          tmp = tmp.nextNode;
          index += 1;
        }
        if (tmp.nextNode !== null) {
          return tmp;
        }
      }
      return null;
    },
    pop: function () {
      if (head === null) {
        return null;
      } else {
        let tmp = head;
        let prev;
        while (tmp.nextNode !== null) {
          prev = tmp;
          tmp = tmp.nextNode;
        }
        if (prev === null) {
          return head;
        } else {
          prev.nextNode = null;
        }
        return tmp;
      }
    },
    contains: function (key) {
      if (head === null) {
        return false;
      }
      let tmp = head;
      while (tmp.nextNode !== null && tmp.value !== key) {
        tmp = tmp.nextNode;
      }
      if (tmp.nextNode !== null) {
        return true;
      } else {
        return false;
      }
    },
    find: function (key) {
      if (head === null) {
        return null;
      }
      let tmp = head;
      let index = 0;
      while (tmp.nextNode !== null && tmp.value !== key) {
        tmp = tmp.nextNode;
        index += 1;
      }
      if (tmp.nextNode !== null) {
        return index;
      } else {
        return null;
      }
    },
    toString: function () {
      if (head === null) {
        return null;
      }
      let tmp = head;
      let result = "";
      while (tmp !== null) {
        result += `(${tmp.value})->`;
        tmp = tmp.nextNode;
      }

      result += "null";
      return result;
    },
    insertAt: function (key, index) {
      if (head === null) {
        return null;
      }
      let prev;
      let tmp = head;
      let pointer = 0;
      while (tmp.nextNode !== null && pointer !== index) {
        pointer += 1;
        prev = tmp;
        tmp = tmp.nextNode;
      }
      if (tmp.nextNode !== null) {
        prev.nextNode = node(key, tmp);
        return true;
      } else {
        return null;
      }
    },
    removeAt: function (index) {
      if (head === null) {
        return null;
      }
      let prev;
      let tmp = head;
      let pointer = 0;
      if (index === 0) {
        head = head.nextNode;
      }
      while (tmp.nextNode !== null && pointer !== index) {
        pointer += 1;
        prev = tmp;
        tmp = tmp.nextNode;
      }
      if (tmp.nextNode !== null) {
        prev.nextNode = tmp.nextNode;
        return true;
      } else {
        return null;
      }
    },
  };
}

const myList = LinkedList();

myList.append(10);
myList.append(20);
myList.append(30);
myList.append(40);
myList.append(50);

console.log(myList.toString());
console.log(myList.size());
console.log(myList.getHead());
console.log(myList.tail());
console.log(myList.at(2));
console.log(myList.pop());
console.log(myList.toString());
console.log(myList.contains(20));
console.log(myList.find(200));
console.log(myList.insertAt("hahaha", 1));
console.log(myList.toString());
console.log(myList.removeAt(10));
console.log(myList.toString());
