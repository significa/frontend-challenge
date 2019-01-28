import { useState } from 'react'

export const useInputState = initialState => {
	const [state, setState] = useState(initialState)
	return [state, e => setState(e.target.value)]
}
