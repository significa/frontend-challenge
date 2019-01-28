import { useState } from 'react'
import { useUrlState as useUrl } from 'with-url-state'

export const useInputState = initialState => {
	const [state, setState] = useState(initialState)
	return [state, e => setState(e.target.value)]
}

export const useSet = (initialValue = []) => {
	const [value, setValue] = useState(new Set(initialValue))
	const add = item => !!item && setValue(value.add(item))
	const remove = item => value.delete(item) && setValue(value)
	const toggle = item => value.has(item) ? remove(item) : add(item)
	return [value, {add, remove, toggle}]
}

export const useUniqueArray = (initialValue = []) => {
	const [value, actions] = useSet(initialValue)
	return [[...value], actions]
}

export const useUrlState = (initialState = {}) => (
	useUrl(initialState, {shouldPushState: () => true})
)
