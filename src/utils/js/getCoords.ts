type TCoordsProps = HTMLDivElement | undefined | null;

export function getCoords(node: TCoordsProps) {
  let top = 0;
  let left = 0;
  while (node) {
    top += +node.offsetTop;
    left += +node.offsetLeft;
    node = node.offsetParent;
  }
  return {
    top,
    left,
  };
}
