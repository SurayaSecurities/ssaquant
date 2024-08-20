async function _capt(key, path, asset) {
    if (key === '') {
        var host = axios.get(RouterSystem(path, key, asset));
        return host
    }
    else {
        return 'A permission error occured'
    }
}

export default _capt