import { useState } from 'react';

function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue);
    const toggle = () => setValue((value) => !value);
    return [value, toggle, setValue];
}

export default useToggle;
