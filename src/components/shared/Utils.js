import uuidv4 from 'uuid/v4';

export const newPost = (title, description) => {
    const post = {
        id: uuidv4(),
        title,
        description,
        featured: false,
        images: [],
        created_at: new Date().toString(),
        updated_at: new Date().toString(),
    }
    return post;
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