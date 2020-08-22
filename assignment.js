function feetToMile(feet = 0){
    if(feet < 0)
        return "Invalid input (number cannot be minus)";
    let mile = feet/5280;
    return mile;
}

function woodCalculator(chair = 0, table = 0, bed = 0){
    if(chair < 0 || table < 0 || number < 0)
        return "Value cannot be negative";
    let totalWood = chair;
    totalWood += table * 3;
    totalWood += bed * 5;
    return totalWood;
}

function brickCalculator(totalFloor = 0){
    if(totalFloor < 0)
        return "Floor count cannot be negative";
    let ans = 0;
    let brickPerFeet = 1000;
    let feetPerFloorAfter1 = 15;
    let feetPerFloorAfter11 = 12;
    let feetPerFloorAfter21 = 10
    if(totalFloor > 20){
        totalFloor = totalFloor - 20;
        ans += (totalFloor * feetPerFloorAfter21 * brickPerFeet);
    }
    if(totalFloor <= 20 && totalFloor >= 11){
        totalFloor = totalFloor - 10;
        ans += (totalFloor * feetPerFloorAfter11 * brickPerFeet);
    }
    if(totalFloor <= 10 && totalFloor >= 1){
        ans += (totalFloor * feetPerFloorAfter1 * brickPerFeet);
    }
    return ans;
}

function tinyFriend(friendList){
    if(friendList.size <= 0)
        return "Empty array is not allowed";
    let tiny = friendList[0];
    for(let i = 1; i < friendList.length; i++){
        if(friendList[i].length < tiny.length){
            tiny = friendList[i];
        }
    }
    return tiny;
}