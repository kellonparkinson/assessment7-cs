// Sum Zero -------------------------------
const sumZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (i !== k) {
                if (arr[i] + arr[k] === 0) {
                    return true
                }
            }
        }
    }
    return false
}
// console.log(sumZero([1, 2, 3]))
// I believe the time complexity of the sumZero function is linear, O(n)

// Unique Characters -----------------------
const hasUniqChars = (str) => {
    let strArr = str.split('')

    for (let i = 0; i < strArr.length; i++) {
        for (let k = 1; k < strArr.length; k++) {
            if (strArr[i] === strArr[k]) {
                return false
            }
        }
    }
    return true
}
// console.log(hasUniqChars('Moonday'))
// I believe the time complexity for the hasUniqChars function is linear, O(n)

// Pangram Sentence ------------------------
const isPangram = (str) => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let strArr = str.toLowerCase().split('')

    for (let i = 0; i < alphabet.length; i++) {
        if (strArr.indexOf(alphabet[i]) < 0) {
            return false
        }
    }
    return true
}
// console.log(isPangram("The quick brown fox jumps over the lazy dog."))
// console.log(isPangram("This is not a pangram."))
// I believe the time complexity of this function is linear, O(n)

// Longest Word ----------------------------
const findLongestWord = (arr) => {
    let longestWord = ''
    
    for (let i = 0; i < arr.length; i++) {
        for (let k = 1; k < arr.length; k++) {
            if (arr[i].length > arr[k].length) {
                longestWord = arr[i]
            } else if (arr[i].length < arr[k].length) {
                longestWord = arr[k]
            }
        }
    }
    return longestWord.length
}
// console.log(findLongestWord(['hi', 'hello', 'bonjour']))
// I believe the time complexity of the findLongestWord function is quadratic, O(n^2)