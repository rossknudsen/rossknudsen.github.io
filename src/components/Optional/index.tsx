import React from "react";

interface OptionalProps<T> {
    item?: T | undefined
    factory: (item: T) => React.ReactElement
}

const Optional = <T,>({item, factory}: OptionalProps<T>) => {
    if (item) {
        return factory(item);
    }
    return null;
}

export default Optional;
