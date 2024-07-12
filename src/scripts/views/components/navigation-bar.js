class Navbar extends HTMLElement {
    constructor () {
        super()
        this.render()
    }

    render () {
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

                .navbar > a {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-width: 44px;
                    min-height: 44px;
                    box-sizing: border-box;
                    text-decoration: none;
                }

                .navbar > ul > li {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    list-style: none;
                }

                .icon {
                    font-size: 30px;
                    font-family: 'Montserrat';
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: #fffffe;
                    transition: 0.5s;
                }

                .icon:hover {
                    transform: scale(1.2);
                }

                .info {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 44px;
                    min-height: 44px;
                    box-sizing: border-box;
                    font-size: 20px;
                    border: 2px solid #fffffe;
                    border-radius: 50%;
                    background-color: #232946;
                    color: #fffffe;
                }

                .info:hover {
                    border: 2px solid #232946;
                    background-color: #eebbc3;
                    color: #232946;
                }
            </style>
        `

        this.innerHTML = `
            ${style}
            
            <header>
                <nav class="navbar">
                    <a href="index.html">
                        <p class="icon"> Todo </p>
                        <p class="icon"> Apps </p>
                    </a>
                    <ul>
                        <li> 
                            <a href="#" class="info">
                                <i class="fa-solid fa-info"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        `
    }
}

customElements.define('navigation-bar', Navbar)