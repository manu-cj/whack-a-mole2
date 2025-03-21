
export const Header = (title:string) => {
    const app = document.getElementById('app');
    const header = document.createElement('header');
    header.classList.add('header');
    
    const h1 = document.createElement('h1');
    h1.classList.add('header__title');
    h1.textContent = title;
   

    header.appendChild(h1);
    if (app) {
        app.appendChild(header);
    }
   
};