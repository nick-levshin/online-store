export interface IFilterHave {
    filterCountBike(): void;
    draw: () => HTMLDivElement;
}
export type EventCallback = (
    values: string[],
    handleNumber: number,
    unencoded: number[],
    tap: boolean,
    locations: number[]
) => void;
type GetResult = number | string | (string | number)[];
export interface API {
    destroy: () => void;
    on: (eventName: string, callback: EventCallback) => void;
    off: (eventName: string) => void;
    get: (unencoded?: boolean) => GetResult;
    set: (input: number | string | (number | string | null)[], fireSetEvent?: boolean, exactInput?: boolean) => void;
    setHandle: (handleNumber: number, value: number | string, fireSetEvent?: boolean, exactInput?: boolean) => void;
    reset: (fireSetEvent?: boolean) => void;
    removePips: () => void;
    removeTooltips: () => void;
    getTooltips: () => {
        [handleNumber: number]: HTMLElement | false;
    };
    getOrigins: () => {
        [handleNumber: number]: HTMLElement;
    };
}
export interface TargetElement extends HTMLElement {
    noUiSlider: API;
}
