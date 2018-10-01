export default function getQueryParam(string, param) {
  return new URLSearchParams(string).get(param) || ''
}
