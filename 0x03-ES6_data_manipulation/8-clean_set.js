function cleanSet(set, start) {
    if (!(set instanceof Set)) {
      throw new TypeError('set should be instance of Set');
    }
    if (typeof start != 'string') {
      throw new TypeError('start must be a string');
    }
    let ret = ''
    let cnt = 0;
    for (el of set) {
      if (start && el.startsWith(start)) {
        el = el.slice(start.length)
        if (cnt != 0) {
            el = '-' + el
        }
        ret += el
        cnt+=1
      }
    }
    return ret
  }
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
  