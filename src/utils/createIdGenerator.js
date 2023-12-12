function createHexIdGenerator() {
    let nextId = 1;

    return function () {
        const uniqueId = nextId.toString(16);
        nextId++;
        return uniqueId;
    };
}

export default createHexIdGenerator;