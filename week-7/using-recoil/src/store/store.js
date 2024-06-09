import { atom, selector } from 'recoil';

export const todoAtom = atom({
    key: 'todoAtom',
    default: []
});

export const filterAtom = atom({
    key: 'filterAtom',
    default: ''
});

export const filterSelector = selector({
    key: 'filterSelector',
    get: ({ get }) => {
        const list = get(todoAtom);
        const filterItem = get(filterAtom);

        const newList = list.filter(t => 
            t.title.includes(filterItem) || t.description.includes(filterItem)
        );

        return filterItem === '' ? list : newList;
    }
});
