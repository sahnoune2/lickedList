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
        this.prepend(value);
      } else {
        let tmp = head;
        while (tmp !== null) {
          tmp = tmp.next;
        }
        tmp.next = node(value, null);
      }
    },
  };
}
