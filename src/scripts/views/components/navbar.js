class Navbar extends HTMLElement {
    constructor () {
        super();
        this.connectedCallback();
    }

    connectedCallback () {
        const media = `
            <style>
                @media only screen and (max-width: 320px) {
                    .navbar-title {
                        font-size: 25px;
                    }

                    .dialog-open {
                        min-width: 38px;
                        min-height: 38px;
                        font-size: 18px;
                    }
                }

                @media only screen and (max-width: 160px) {
                    .navbar-title {
                        font-size: 20px;
                    }

                    .dialog-open {
                        min-width: 33px;
                        min-height: 33px;
                        font-size: 13px;
                    }
                }
            </style>
        `;

        const style = `
            <style>
                header {
                    min-width: 100vw;
                    min-height: auto;
                    border-bottom: 2px solid #121629;
                    background-color: #232946;
                }

                .navbar {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    padding: 8px 0;
                }

                .container-title {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-width: 44px;
                    min-height: 44px;
                    box-sizing: border-box;
                    text-decoration: none;
                }

                .navbar-title {
                    font-size: 30px;
                    font-family: 'Montserrat';
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: #fffffe;
                    transition: 0.5s;
                }

                .navbar-title:hover {
                    transform: scale(1.2);
                }

                .button-list {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    list-style: none;
                }

                .button-list > .dialog-open {
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 44px;
                    min-height: 44px;
                    border: 2px solid #fffffe;
                    border-radius: 25%;
                    box-sizing: border-box;
                    font-size: 20px;
                    background-color: #232946;
                    color: #fffffe;
                    transition: 0.5s;
                }

                .button-list > .dialog-open:hover {
                    border: 2px solid #121629;
                    background-color: #eebbc3;
                    color: #232946;
                }
            </style>
        `;

        this.innerHTML = `
            ${style}
            
            <header>
                <nav class="navbar">
                    <a class="container-title" href="/">
                        <p class="navbar-title"> Todo </p>
                        <p class="navbar-title"> Apps </p>
                    </a>
                    <ul class="container-button">
                        <li class="button-list">
                            <button type="button" class="dialog-open" id="dialog-open">
                                <i class="fa-solid fa-info"></i>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            ${media}
        `;
    }
}

customElements.define('top-content', Navbar);