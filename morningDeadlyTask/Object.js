const count_value = (value, values) => {
    count = 0;
    for (let i = 0; i < values.length; i++) {
        if (value === values[i]) {
            count++;
        }
    }
    return count
}


const convert_array = (values) => {
    let my_obj = {}
    for (let i = 0; i < values.length; i++) {
        my_obj[values[i]] = count_value(values[i], values)
    }
    return my_obj
}

console.log(convert_array([2, 2, 1, 3, 5, 5]))
