// Sort Array By ID
export const sortArrayById = (arrayWithIDS) => {
    const sortedArray = [...new Set(arrayWithIDS)].sort((a, b) => a.id - b.id);
    return sortedArray;
}

// Remove Duplicate Objects from an Array
export const removeDuplicateObjFromArray = (array) => {
    const uniqueArray = array.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === array.findIndex(obj => {
            return JSON.stringify(obj) === _value;
        });
    });
    return uniqueArray;
}