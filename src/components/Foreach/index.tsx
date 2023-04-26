import React from "react";

interface ForeachProps<T> {
  items: T[];
  factory: (item: T, index: number) => React.ReactElement;
}

const Foreach = <T,>({ items, factory }: ForeachProps<T>) => {
  return <>{items.map((x, i) => factory(x, i))}</>;
};

export default Foreach;
