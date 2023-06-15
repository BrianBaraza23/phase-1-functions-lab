// Code your solution in this file!
// distanceFromHqInBlocks

const scuberHq = 42;

function distanceFromHqInBlocks(pickUp)
{
    return Math.abs(pickUp - scuberHq);
};


function distanceFromHqInFeet(pickUp)
{
    return Math.abs((pickUp - scuberHq) * 264);
};


function distanceTravelledInFeet(startblck,endblck)
{
    return Math.abs(startblck - endblck) * 264;
};


function calculatesFarePrice(startblck,endblck){
    
    let fare
    let ttlDst = Math.abs(endblck - startblck) * 264;
    

    if (ttlDst<= 400){
        fare = 0;
        return fare;

    }else if(ttlDst > 400 && ttlDst < 2000){
        fare = (ttlDst - 400) * (2/100);
        return fare;

    } else if (ttlDst > 2000 && ttlDst < 2500){
        fare = 25;
        return fare 

    }else if (ttlDst > 2500 ){
        return 'cannot travel that far';
    }
};