
function greetFriendsWithAges(name1, birthYear1, name2, birthYear2, name3, birthYear3,name4,birthYear4) {
  let currentyear = 2024;
  let age1 = currentyear - birthYear1;
  let age2 = currentyear - birthYear2;
  let age3 = currentyear - birthYear3;
  let age4 = currentyear - birthYear4;
  console.log(`Welcome ${name1}, you are ${age1}.`);
    console.log(`Welcome ${name2}, you are ${age2}.`);
    console.log(`Welcome ${name3}, you are ${age3}.`);
    console.log(`Welcome ${name4}, you are ${age4}.`);
}

greetFriendsWithAges('Windsurf', 2006, 'Naay', 2003, 'Bew', 1996,'B',1993);

// p1
function isPassing(score) {
    return score >= 5;
}


console.log(isPassing(6)); 
console.log(isPassing(4)); 
// p2
function checkGrade(score) {
    if (score >= 5) {
        if (score > 8) {
            if (score === 11) {
                console.log("Perfect");
            } 
        }
        return true;
    } else {
        return false;
    }
}


console.log(checkGrade(6));  
console.log(checkGrade(9));  
console.log(checkGrade(11)); 
console.log(checkGrade(4));  
// p3
function checkGrade(score) {
    if (score >= 5) {
        if (score > 8) {
            if (score === 11) {
                console.log("Perfect");
            } else {
                console.log("Excellent");
            }
        }
        return true;
    } else {
        return false;
    }
}


console.log(checkGrade(6));  
console.log(checkGrade(9));  
console.log(checkGrade(11)); 
console.log(checkGrade(4));  


