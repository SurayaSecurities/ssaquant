import axios from axios;
import _capt from './api/action/https';
import getKey from './api/keys';

async function init() {
    return "System initialized"
}


async function main(fx, path, asset) {
    if (fx === init()) {
        init();
        // perform a call
        try {
            key = getKey(permission)
            var response = _capt(key, path, asset);
            return response.data
        } catch (error) {
            'An error occured'
        }
    } else {
        return "Initialization failed"
    }
}

main(init())
