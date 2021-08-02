function differenceInDate(date1, date2) {
    var difference = date1.getTime() - date2.getTime();
    return difference / (1000 * 3600 * 24);
}

module.exports = differenceInDate;