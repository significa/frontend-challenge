import { createStorage } from 'utils/storage'

const [Provider, useStorage] = createStorage(
	'favorites',
	(key, value) => (key === '' && value === null)
		? new Set()
		: (Array.isArray(value) ? new Set(value) : value),
	(key, value) => (value instanceof Set ? [...value].sort() : value),
)

const useFavorites = () => {
	const [value, setValue] = useStorage()

	const add = item => value.add(+item) && setValue(new Set(value))
	const remove = item => value.delete(+item) && setValue(new Set(value))
	const toggle = item => value.has(+item) ? remove(+item) : add(+item)

	return [value, {add, remove, toggle}]
}

const useFavoriteState = (item) => {
	const [value, {add, remove, toggle}] = useFavorites()
	const i = +item

	const actions = {
		add: () => add(i),
		remove: () => remove(i),
		toggle: () => toggle(i),
	}

	return [value.has(i), actions]
}

export {useFavorites, useFavoriteState, Provider}
