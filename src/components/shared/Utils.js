export const formattedDate = (chosenDate) => {
    const d = new Date(chosenDate);
    const year = d.getFullYear().toString();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const date = d.getDate().toString().padStart(2, '0');

    return year + '-' + month + '-' + date;
}

export const snapshotToArray = (snapshot) => {
    let itemArr = [];
    snapshot.forEach( (child) => {
        let item = child.val();
        item.id = child.key;
        itemArr.push(item);
    })
    return itemArr;
}

export const snapshotToArr = (snapshot) => {
    let itemArr = [];
    snapshot.forEach( (child) => {
        let item = child.val();
        itemArr.push(item);
    })
    return itemArr;
}