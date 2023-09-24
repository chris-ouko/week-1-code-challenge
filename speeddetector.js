function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemrit = 5;

    if (speed < speedLimit) {
        // print "Ok" if less than speed limit
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) /kmPerDemrit);
        
        // prints "still Ok" if within the Demerit point threshold.
        if (demeritPoints <= 12) {
            console.log("Still Ok");
        } if (demeritPoints > 12) {
        // print "License suspended" if above the Demerit point threshold
            console.log("License suspended");
        }
    }
}

const carSpeed = 53;
calculateDemeritPoints(carSpeed);