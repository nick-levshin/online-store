import './footer.css';
import { IFooter } from './interfaceFooter';

class Footer implements IFooter {
    draw(): HTMLDivElement {
        const footer = document.createElement('div') as HTMLDivElement;
        footer.classList.add('footer');

        const anchorRS = document.createElement('a') as HTMLAnchorElement;
        anchorRS.href = 'https://rs.school/js/';
        anchorRS.target = '_blank';

        const imgLogo = document.createElement('img') as HTMLImageElement;
        imgLogo.setAttribute('alt', 'logotip RS school');
        imgLogo.classList.add('footer__img_RS');
        imgLogo.src = './assets/images/logoRS3.png';
        anchorRS.append(imgLogo);

        const anchorMyGithub = document.createElement('a') as HTMLAnchorElement;
        anchorMyGithub.classList.add('footer__github');
        anchorMyGithub.href = 'https://github.com/SmSka2021?tab=repositories';
        anchorMyGithub.target = '_blank';

        const imgGitHub = new Image() as HTMLImageElement;
        imgGitHub.src = './assets/images/github.jpg';
        imgGitHub.setAttribute('alt', 'img GitHub');
        imgGitHub.classList.add('footer__img_GitHub');
        anchorMyGithub.append(imgGitHub);

        const yearTxt = document.createElement('p') as HTMLParagraphElement;
        yearTxt.classList.add('footer__year');
        yearTxt.innerHTML = '2022';
        footer.append(anchorRS, yearTxt, anchorMyGithub);
        return footer;
    }
}

export default Footer;
