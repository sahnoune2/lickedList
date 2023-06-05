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
        head = node(value);
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
      while (tmp.nextNode !== null) {
        total += 1;
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
      while (tmp !== null) {
        tmp = tmp.nextNode;
      }
      return tmp;
    },
    at: function (key) {
      let tmp = head;
      if (head === null) {
        return null;
      } else {
        while (tmp !== null && tmp.value !== key) {
          tmp = tmp.nextNode;
        }
        if (tmp !== null) {
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
        while (tmp !== null) {
          prev = tmp;
          tmp = tmp.nextNode;
        }
        if (prev === null) {
          return head;
        } else {
          prv.nextNode = null;
        }
        return tmp;
      }
    },
    contains: function (key) {
      if (head === null) {
        return false;
      }
      let tmp = head;
      while (tmp !== null && tmp.value !== key) {
        tmp = tmp.nextNode;
      }
      if (tmp !== null) {
        return true;
      } else if (tmp === null) {
        return false;
      }
    },
    find: function (key) {
      if (head === null) {
        return null;
      }
      let tmp = head;
      let index = 0;
      while (tmp !== null && tmp.value !== key) {
        tmp = tmp.nextNode;
        index += 1;
      }
      if (tmp === null) {
        return index;
      } else {
        return null;
      }
    },
  };
}
