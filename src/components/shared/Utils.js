
export const snapshotToArray = (snapshot) => {
    let itemArr = [];
    snapshot.forEach( (child) => {
        let item = child.val();
        item.id = child.key;
        itemArr.push(item);
    })
    return itemArr;
}