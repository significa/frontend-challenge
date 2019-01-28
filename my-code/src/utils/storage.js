import React, { createContext, useContext, useState, useEffect } from 'react'

export const createStorage = (key, parse = null, stringify = null) => {
	const initialValue = JSON.parse(localStorage.getItem(key), parse)

	const ValueContext = createContext(initialValue)
	const SetterContext = createContext(() => {})
	const useStorage = () => [ValueContext, SetterContext].map(c => useContext(c))

	const Provider = ({children}) => {
		const [value, setValue] = useState(initialValue)

		useEffect(() => {
			localStorage.setItem(key, JSON.stringify(value, stringify))
		}, [value])

		return (
			<ValueContext.Provider value={value}>
				<SetterContext.Provider value={setValue}>
					{children}
				</SetterContext.Provider>
			</ValueContext.Provider>
		)
	}

	return [Provider, useStorage]
}

export const useStorageString = (key = 'key', initialValue = '') => {
	const initial = () => window.localStorage.getItem(key) || initialValue
	const [value, setValue] = useState(initial)
	useEffect(() => window.localStorage.setItem(key, value), [value])

	return [value, setValue]
}
