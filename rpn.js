function revpolnot(str, i) {
    while (i > 0) {
        let stack = [];
        let rpn = "";
        for (let c = 0; c < str.length; c++) {
            const character = str[c];
            if ("+-*/^".indexOf(character) > -1) {
                stack.push(character);
            } else if (character === ')') {
                rpn = rpn + stack.pop();
            } else if (character === '(') {
            } else {
                rpn = rpn + character;
            }
        }
        i--;
        console.log(rpn);
    }
};

function hotels(money, array) {
    let maxi = 0;
    let temp = array[0];
    let start = 0;
    for (let c = 1; c <= array.length; c++) {
        while (temp > money && start < c-1) {
            temp -= array[start];
            start++;
        }
        maxi = Math.max(maxi, temp);
        temp += array[c];
    }
    console.log(maxi);
};
// Test usage with test data specified in task description
revpolnot('((a+t)*((b+(a+c))^(c+d)))', 3);

hotels(9, [7, 3, 5, 6]);