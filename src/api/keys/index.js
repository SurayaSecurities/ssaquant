
export default function getKey(permission) {
    if (permission === true) {
        my_key = process.env.SSA_KEY
        return my_key
    } else {
        "An error occured getting keys"
    };
    
}