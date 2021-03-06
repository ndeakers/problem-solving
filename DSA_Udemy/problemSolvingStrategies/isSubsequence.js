/**
* isSubsequence takes in two strings and checks whether the chars
* in the first string form a subsequence of second string
*
* Do the chars in the first string appear somewhere in the second
* without their order changing
sing, sting ===> true
*/
// create index marker for the first string
// loop over the second string
// if the current char is the same as the first string at index marker
// increase index marker
// check if index marker is equal to length-1

function isSubsequence(str1, str2) {
    let currIdx = 0;

    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === str1[currIdx]) {
            currIdx++;
        }
        if (currIdx === str1.length) {
            return true;
        }
    }
    return false;
}