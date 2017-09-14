function toStr(num, base) {
    let convertString = "0123456789ABCDEF";
    if (num < base) {
        return convertString[num]
    } else {
        return toStr(Math.floor(num / base)) + convertString[num % base]
    }
}

function reverse(str) {
    if (str.length == 0) {
        return str;
    } else {
        return str.substring(1) + str.charAt(0)
    }
}

function isPalingdrome(str) {
    if (str.length <= 1) {
        return true;
    }

    if (str.charAt(0) === str.charAt(str.length - 1)) {
        return isPalingdrome(str.substring(1, str.length -1))
    }
    
    return false;
}