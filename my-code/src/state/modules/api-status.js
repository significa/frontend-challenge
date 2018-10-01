const API_STATUS_DONE = 'whats-in/api-status/DONE'
const API_STATUS_LOADING = 'whats-in/api-status/LOADING'
const API_STATUS_FAILED = 'whats-in/api-status/FAILED'

const DONE = 'DONE'
const LOADING = 'LOADING'
const FAILED = 'FAILED'

export default function reducer(state = { status: DONE }, action) {
  switch (action.type) {
    case API_STATUS_DONE:
      return {
        status: DONE
      }
    case API_STATUS_LOADING:
      return {
        status: LOADING
      }
    case API_STATUS_FAILED:
      return {
        status: FAILED,
        message: action.payload.message
      }
    default:
      return state
  }
}

export function setAPIStatusDone() {
  return {
    type: API_STATUS_DONE
  }
}

export function setAPIStatusLoading() {
  return {
    type: API_STATUS_LOADING
  }
}

export function setAPIStatusFailed(error) {
  return {
    type: API_STATUS_FAILED,
    payload: error,
    error: true
  }
}

export function getErrorMessage({ message }) {
  return message
}

export function getIsDone({ status }) {
  return status === DONE
}

export function getIsLoading({ status }) {
  return status === LOADING
}

export function getIsFailed({ status }) {
  return status === FAILED
}
