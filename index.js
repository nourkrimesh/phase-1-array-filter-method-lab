// Code your solution here

function findMatching(drivers, driverName) {
    return drivers.filter(driver => driver.toLowerCase() === driverName.toLowerCase());
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(driver => driver.match(`^${str}`));
}

function matchName(drivers, str) {
    return drivers.filter((driver) => driver.name === str);
}