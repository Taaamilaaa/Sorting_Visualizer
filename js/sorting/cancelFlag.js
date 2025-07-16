export let cancelRequested = false;

export function requestCancel() {
  cancelRequested = true;
}

export function resetCancelFlag() {
  cancelRequested = false;
}
