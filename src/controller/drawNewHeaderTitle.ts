import HeaderTitle from './../components/header/title_header/header_title';

export function drawNewHeaderTitle(): void {
    document.querySelector('.header__title')?.remove();
    document.querySelector('.header')?.prepend(new HeaderTitle().draw());
}
