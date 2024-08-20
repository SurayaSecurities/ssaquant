import getKey from "../keys"


export default function RouterSystem(path, key, asset) {

    if (key == getKey(permission = true)){
        if (path == 'detail') {
            url = 'https://ssa-api-rwxwwe.onrender.com/get_detailed_values'
        } else if (path == `${asset}`) {
            url = `http://ssa-api-rwxwwe.onrender.com/price/${asset}`
        }
    }
}
