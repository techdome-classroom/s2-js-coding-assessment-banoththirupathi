/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const matchingBracket = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    const stack = [];

    for (let char of s) {
        if (matchingBracket[char]) {
            const topElement = stack.length ? stack.pop() : '#';
            if (matchingBracket[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};

module.exports = { isValid };


