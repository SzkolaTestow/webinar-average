export async function fakeNetwork(key: string) {
    let fakeCache: {[key: string]: boolean} = {};
    if (!key) {
        fakeCache = {};
    }

    if (fakeCache[key]) {
        return;
    }

    fakeCache[key] = true;
    return new Promise(res => {
        setTimeout(res, Math.random() * 700);
    });
}