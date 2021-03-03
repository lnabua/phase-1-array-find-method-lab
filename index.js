// find years won in superbowl and return years won
function superbowlWin(record) {
    const recordData = record.find((data) => data.result === "W");
    if (recordData != undefined) {
        return recordData.year;
    } else {
        return undefined;
    }
}

/* Using iterator method
function yearWon(data) {
    for (const user of data) {
        if (user.result === "W") {
            console.log(user.year);
        }
    }
}
yearWon(record);
*/