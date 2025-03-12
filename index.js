const superbowlWin = (record) => {
    const yearWon = record.find (item => item.result === `W`)
    return yearWon ? yearWon.year : undefined;
}

console.log(superbowlWin)
