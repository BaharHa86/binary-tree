import Tree from './Tree';

interface objType {
  value: string;
  left?: objType;
  right?: objType;
}
const buildObject = (values: string[], index: number): objType | undefined => {
  if (index >= values.length) {
    return undefined;
  }
  const value = values[index];
  const node: objType = {
    value,
    left: buildObject(values, 2 * index + 1),
    right: buildObject(values, 2 * index + 2),
  };
  return node;
};

interface TreeContainerProps {
  values: string[];
}
function TreeContainer({ values }: TreeContainerProps) {
  const obj = buildObject(values, 0);

  return <>{values && <Tree {...obj} />}</>;
}

export default TreeContainer;
