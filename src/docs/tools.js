export function setDeep(keypath, value) {
  if (keypath === undefined) {
    return;
  }

  const keys = keypath.replace(/\[(\d+)\]/g, '.$1').split('.');
  const lastKey = keys.pop();

  // If not a nested keypath
  if (keys[0] === undefined) {
    const data = {};
    data[lastKey] = value;
    this.set(data);
    return;
  }

  let object = this.get()[keys[0]];
  for (let i = 1; i < keys.length; i++) {
    object = object[keys[i]];
  }
  object[lastKey] = value;

  const data = {};
  data[keys[0]] = this.get()[keys[0]];
  this.set(data);
}