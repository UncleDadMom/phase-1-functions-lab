function distanceFromHqInBlocks(pickUpLocation) {
    return Math.abs(pickUpLocation - 42)
};
function distanceTravelledInFeet(pickUpLocation, destination) {
    return Math.abs(264*(pickUpLocation - destination))
};
function distanceFromHqInFeet(pickUpLocation) {
    return Math.abs(264* (pickUpLocation - 42))
};
function calculatesFarePrice(pickUpLocation, destination) {
    const travelledFeet = distanceTravelledInFeet(pickUpLocation, destination)
    if (travelledFeet <= 400) {
        return 0
    } else if (travelledFeet > 400 && travelledFeet <= 2000) {
        return (travelledFeet - 400) * .02
    } else if (travelledFeet <= 2500 && travelledFeet > 2000) {
        return 25
    } else if (travelledFeet > 2500) {
        return `cannot travel that far`
    }   
};