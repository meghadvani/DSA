// Stack Operations in JS

class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return `Stack is Empty!`;
        } else {
            return this.stack.shift();
        }
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    top() {
        if (this.isEmpty()) {
            return `Stack is Empty!`;
        } else {
            return this.stack[0];
        }
    }


    size() {
        return this.stack.length;
    }


}



let stack = new Stack();
stack.push(12);
stack.push(10);
stack.push(15);

console.log(stack.size());

stack.pop();

console.log(stack.top());
