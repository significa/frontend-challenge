import React, { createContext, useContext } from 'react'

const useStorageContext = Context => {
	const {value, setValue} = useContext(Context)
	return [value, setValue]
}

export const createStorage = (key, parse, stringify) => {
	const initialValue = JSON.parse(localStorage.getItem(key), parse)
	const Context = createContext({ value: initialValue, setValue: () => {} })

	class StorageProvider extends React.Component {
		static displayName = `StorageProvider(${key})`
		setValue = value => this.setState({ value })
		state = { value: initialValue, setValue: this.setValue }

		componentDidUpdate(){
			localStorage.setItem(key, JSON.stringify(this.state.value, stringify))
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					{this.props.children}
				</Context.Provider>
			)
		}
	}

	return [StorageProvider, () => useStorageContext(Context)]
}
