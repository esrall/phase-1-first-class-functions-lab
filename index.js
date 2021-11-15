const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const firstTwoDrivers = drivers.splice(0, 2)
const lastTwoDrivers = drivers.splice(0,4)

function returnFirstTwoDrivers () {
    return firstTwoDrivers
}

function returnLastTwoDrivers () {
    return lastTwoDrivers
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (value) {
    return function() {
        return 5*5
    }
}
 let fareDoubler = fare => fare*2
 let fareTripler = fare => fare*3

function selectDifferentDrivers(selectingtDrivers, drivers) {
    if (selectingDrivers = returnFirstTwoDrivers) 
    return firstTwoDrivers
    else if (selectingDrivers = returnLastTwoDrivers)
    return lastTwoDrivers
}

//I dont understand why the last check won't pass.
//I plan to come back to this once I catch up in later assignments