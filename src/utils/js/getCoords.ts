export function getCoords(node: any) {
  let top = 0;
  let left = 0;
  let _node = node;
  while (_node) {
    top += +_node.offsetTop;
    left += +_node.offsetLeft;
    _node = _node.offsetParent;
  }
  return {
    top,
    left,
  };
}
