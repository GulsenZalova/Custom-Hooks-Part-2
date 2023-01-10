import React, { useEffect, useState } from 'react'

function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
        } else {
            return initialValue
        }

    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value,key])

    return [value, setValue]
}

export default useLocalStorage
