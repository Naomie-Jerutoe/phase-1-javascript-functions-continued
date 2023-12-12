// code your solution here
function saturdayFun( activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office"){
    return (`This Monday, I will ${activity}.`);
};
mondayWork();

function wrapAdjective(string = "*"){
    const innerFunction = function(adj = "special"){
        return `You are ${string}${adj}${string}!`;
    };
        return innerFunction;
}