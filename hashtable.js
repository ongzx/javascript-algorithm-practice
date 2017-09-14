
/**
 * Calculate hash value for a String
 * if collision, consider rehashing where (pos+3)%tableSize or chaining
 * @param {*} aString 
 * @param {*} tableSize 
 */
function hashStr(aString, tableSize) {
    let sum = 0;
    for (let i =0; i< aString.length; i++) {
        sum += aString.charCodeAt(i);
    }
    return sum % tableSize;
}

function hashNum(aNum, tableSize) {
    return aNum % tableSize;
}

function rehashNum(oldHash, tableSize) {
    return ( oldHash + 1 ) % tableSize;
}

class hashTable {
    constructor(size) {
        this.tableSize = size;
        this.slots = [];
        this.data = [];
    }

    put(aKey, aData) {
        let hashValue = hashNum(aKey, this.tableSize);
        if (this.slots[hashValue] == null) {
            this.slots[hashValue] = aKey;
            this.data[hashValue] = aData;
        } else {
            if (this.slots[hashValue] == aKey) {
                this.data[hashValue] = aData;
            } else {
                let nextSlot = rehashNum(hashValue, this.tableSize);
                while (this.slots[nextSlot] != null && this.slots[nextSlot] != aKey) {
                    nextSlot = rehashNum(nextSlot, this.tableSize);
                }
                if (this.slots[nextSlot] == null) {
                    this.slots[nextSlot] = aKey;
                    this.data[nextSlot] = aData;
                } else {
                    this.data[nextSlot] = aData;
                }
            }
        }
    }

    get(aKey) {
        let hashValue = hashNum(aKey, this.tableSize);
        let found = false;
        let stop = false;
        let data = null;
        let position = hashValue;
        while(this.slots[position] != null && !found && !stop) {
            if (this.slots[position] == aKey) {
                found = true;
                data = this.data[position];
            } else {
                position = rehashNum(position, this.tableSize);
                if (position == hashValue) {
                    stop = true;
                }
            }
        }
        return data;
    }
}