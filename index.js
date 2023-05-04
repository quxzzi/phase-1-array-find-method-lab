function superbowlWin(record) {
    const winRecord = record.filter(obj => obj.result === 'W');
    if (winRecord.length > 0) {
      return winRecord[0].year;
    } else {
      return undefined;
    }
  }