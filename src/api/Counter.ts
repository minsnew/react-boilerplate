// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return fetch(`/fetchCount?amount=${amount}`).then((res) => res.json());
}
