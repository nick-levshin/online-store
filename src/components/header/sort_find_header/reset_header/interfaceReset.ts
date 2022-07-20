export interface IReset {
    resetSetting(e: Event): void;
    resetFilter(e: Event): void;
    draw: () => HTMLDivElement;
}
