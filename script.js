// Declaring Array of special charecters
var specchars = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Declaring Array of numeric characters 
var numchars = ['0','1','2','3','4','5','6','7', '8','9'];

// Declaring Array of lowercase characters 
var lowerchars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//  Declaring Array of uppercase characters 
var upperchars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Functionality of generate password
function getPasswordOptions() {
//length variabe take length of password from user
  var length = parseInt(window.prompt('please write the length of password')
  );

  // checking length is integer or not
  if (isNaN(length) === true) { window.alert('length of password must be mention in integer');
    return;
  
  }

  // checking length of password is less than 8 or not
  if (length < 8) {window.alert('Password length must be at least 8 characters');
    return;
  
  }

  // checking length of password is greater than 128 or not
  if (length > 128) {window.alert('Password length must less than 129 characters');
    return;
  }

  // hasspecialcharacter variable to save true of false value (ok means true or cancel mean false)
  var specchars = confirm(  'Click OK to confirm including special characters.'
                                    );

  // hasnumeric character variable to save true of false value (ok means true or cancel mean false)
  var numchars = confirm('Click OK to confirm including numeric characters.'
  );

  // // haslowercasedcharacter variable to save true of false value (ok means true or cancel mean false)
  var lowerchars= confirm('Click OK to confirm including lowercase characters.'
  );

  // // hasupeercasedcharacter variable to save true of false value (ok means true or cancel mean false)
  var upperchars = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  // checking all 4 character variable have false or any one have true
  if ( specchars === false &&numchars === false &&lowerchars=== false &&upperchars === false
  ) {window.alert('Must select at least one character type');
  return;
  }

  // declaring object to characters userinput
  var passwordOptions = {length: length,specchars: specchars,numchars: numchars,lowerchars: lowerchars,upperchars: upperchars };

  return passwordOptions; //here i am return that object
}

// getting random element from array(using buildin function math.floor(math.random))
function getRandom(arr) {//using function  named getrandom
  var randIndex = Math.floor(Math.random() * arr.length); //using arr.length mean length
  var randElement = arr[randIndex];//randindex is index

  return randElement; //return random element
}

// now generate password in this function 
function generatePassword() {
  var options = getPasswordOptions();// calling this function
  // declaring result array
  var result = [];

  // declaring array of character which is included in password
  var possibleCharacters = [];

  //declaring array of chosed one character of each type
  var guaranteedCharacters = [];

  // add array of special character and save in guranteed character
  if (options.specchars) {
    possibleCharacters = possibleCharacters.concat(specchars);
    guaranteedCharacters.push(getRandom(specchars));
  }
//add array of numeric character and save in guranteed character
  if (options.numchars) {
    possibleCharacters = possibleCharacters.concat(numchars);
    guaranteedCharacters.push(getRandom(numchars));
  }

  //add array of lowercase character and save in guranteed character
  if (options.lowerchars) {
    possibleCharacters = possibleCharacters.concat(lowerchars);
    guaranteedCharacters.push(getRandom(lowerchars));
  }

  // add array of uppercase character and save in guranteed character
  if (options.upperchars) {
    possibleCharacters = possibleCharacters.concat(upperchars);
    guaranteedCharacters.push(getRandom(upperchars));
  }

  // using loop generate random possible character and save in posssible character
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  // mix atleastt one character of geach type in guranteed character
  for(var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
  }

  // Transform the result into a string and pass into writePassword
  return result.join('');
}

// reference to generate password
var generateBtn = document.querySelector('#generate');

// write password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// connect event to geenrate password
generateBtn.addEventListener('click', writePassword);
