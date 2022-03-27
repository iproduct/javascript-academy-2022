// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve, reject) =>
    setTimeout(() => Math.random() < 0.5 ? resolve({ data: amount }): reject("Service not available."), 1000)
  );
}
