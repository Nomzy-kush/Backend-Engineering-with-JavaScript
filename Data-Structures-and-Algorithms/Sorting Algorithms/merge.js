function merge(left, right) {
    const result = []
    let i = 0;
    let j = 0;


    while (i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }

    result.push(...left.slice(i))
    result.push(...left.slice(j))
    return result;

}


const res = merge([3, 27, 38, 43], [9, 10, 17, 82])
console.log(res);
