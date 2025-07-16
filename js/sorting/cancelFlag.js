export let cancelRequested = false;

export function requestCancel() {
  cancelRequested = true;
  console.log(cancelRequested);
}

export function resetCancelFlag() {
  cancelRequested = false;
  console.log(cancelRequested);
}
