import { ObjectFilter } from './objectFilter';

export function checkLocalStorage(): boolean {
    const saveItem = localStorage.getItem('filterObject');
    if (saveItem !== undefined || saveItem !== null) {
        return true;
    }
    return false;
}
export function saveLocalStorage(): void {
    localStorage.setItem('filterObject', JSON.stringify(ObjectFilter));
}
