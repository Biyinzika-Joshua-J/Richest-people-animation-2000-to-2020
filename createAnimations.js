function getNetWorth(nameInFirstYear, secondYear){
    if (secondYear){
        for (let i=0; i<secondYear.length; i++){
            if (secondYear[i].name == nameInFirstYear){
                return secondYear[i].netwoth;
            }
        }
        return false;
    }else{
        console.log('reached the end')
    }
}

const CheckForCommons = function(firstYear, secondYear){
    for (let i=0; i<firstYear.length; i++){
        let networth = getNetWorth(firstYear[i].name, secondYear);
        if (networth){
            firstYear[i].netwothComparison = networth;
        }
    }
    return firstYear;
}

function maximumDiffBetweenNetworthAndComparisonNetwoth(array){
    let maximum = 0;
    for (let i=0; i<array.length; i++){
        if (array[i].netwothComparison){
            if  (parseInt(Math.abs(array[i].netwoth - array[i].netwothComparison)) > maximum){
                maximum = parseInt(Math.abs(array[i].netwoth - array[i].netwothComparison));
            }
        }
    }
    return maximum;
}

const GenerateAnimationObject = function(commonsArray, year){
    let animationOfASingleYear = [];
    let maximum = maximumDiffBetweenNetworthAndComparisonNetwoth(commonsArray);
    
    for (let i=0; i<maximum; i++){
        let animation = [];
        for (let j=0; j<commonsArray.length; j++){
            let floatNetworth = commonsArray[j].netwoth
            if (parseInt(commonsArray[j].netwoth) > parseInt(commonsArray[j].netwothComparison)){
                commonsArray[j].netwoth = commonsArray[j].netwoth - 1;
                let data = {...commonsArray[j]};
                data.netwoth = floatNetworth;
                animation.push(data);
            }else if(parseInt(commonsArray[j].netwoth) < parseInt(commonsArray[j].netwothComparison)){
                commonsArray[j].netwoth++;
                let data = {...commonsArray[j]};
                data.netwoth = floatNetworth;
                animation.push(data);
            }else{
                animation.push(commonsArray[j]);
            }
        }
        animationOfASingleYear.push(animation);
    }

    

    return animationOfASingleYear;
}

export const CreateAnimations = function(data){
    let animations = [];
    let currentYear = 2000;
    let commons;
    for (let i=0; i<data.length; i++){
       
        if (data[i+1]){    
            let thisYear = i
            let nextYear = thisYear+1;
            let firstYear = data[i][currentYear];
            currentYear = currentYear + 1;
            let secondYear = data[nextYear][currentYear];
            commons = CheckForCommons(firstYear, secondYear);
            let yearAnimationObject = GenerateAnimationObject(commons, firstYear);
            animations.push(yearAnimationObject);
        }
    }

    return animations;    
}

