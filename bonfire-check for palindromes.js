function palindrome(str) {

  //var str = 'nope';
  var strReverse = str.split('').reverse().join('');

  strReverse = strReverse.replace(/[_]|\W|\s/g,'').toLowerCase();

  var reReverse = strReverse.split('').reverse().join('');

        if (strReverse === reReverse) {
            return true;
        } else {
            return false;
        }

}

palindrome('nope');
