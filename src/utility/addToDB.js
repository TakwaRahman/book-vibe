const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem('readlist')

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData
    }
    else {
        return [];
    }
}




const addToDB = (id) => {
    const storedBookData = getStoredBook()


    if (storedBookData.includes(id)) {
        alert('vai ei id already ase')
    }
    else {
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readlist', data)
    }
}


export { addToDB }