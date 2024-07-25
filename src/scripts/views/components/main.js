class Main extends HTMLElement {
    constructor () {
        super();
        this.connectedCallback();
    }

    connectedCallback () {
        const mediaForm = `
            <style>
                @media only screen and (max-width: 980px) {
                    .container-formulir {
                        width: 630px;
                    }
                    
                    .formulir > .value {
                        width: 500px;
                    }
                }

                @media only screen and (max-width: 780px) {
                    .container-formulir {
                        width: 530px;
                    }
                
                    .formulir > .value {
                        width: 400px;
                    }
                }

                @media only screen and (max-width: 680px) {
                    .container-formulir {
                        width: 475px;
                    }

                    .formulir > .value {
                        width: 370px;
                    }
                }

                @media only screen and (max-width: 580px) {
                    .container-formulir {
                        width: 360px;
                    }

                    .formulir > .value {
                        width: 260px;
                    }
                }

                @media only screen and (max-width: 480px) {
                    .container-formulir {
                        width: 300px;
                    }

                    .formulir > .value {
                        width: 260px;
                    }
                }

                @media only screen and (max-width: 320px) {
                    .container-formulir {
                        width: 255px;
                    }
                    
                    .formulir > .value {
                        width: 230px;
                    }
                }

                @media only screen and (max-width: 260px) {
                    .container-formulir {
                        width: 200px;
                    }
                    
                    .formulir > .value {
                        width: 180px;
                        font-size: 30px;
                    }
                }

                @media only screen and (max-width: 200px) {
                    .container-formulir {
                        width: 150px;
                    }
                    
                    .formulir > .value {
                        width: 130px;
                        font-size: 20px;
                    }
                }
            </style>
        `;

        const mediaTodo = `
            <style>
                @media only screen and (max-width: 980px) {
                    .container-todo > .lists {
                        width: 620px;
                    }
                }

                @media only screen and (max-width: 780px) {
                    .container-todo > .lists {
                        width: 520px;
                    }
                }

                @media only screen and (max-width: 680px) {
                    .container-todo > .lists {
                        width: 470px;
                    }
                }

                @media only screen and (max-width: 580px) {
                    .container-todo > .lists {
                        width: 350px;
                    }
                }

                @media only screen and (max-width: 480px) {                   
                    .container-todo > .lists {
                        width: 295px;
                    }

                    .container-todo > .lists > .list {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .container-todo > .lists > .list > .list-title {
                        text-align: center;
                    }
                }

                @media only screen and (max-width: 320px) {                   
                    .container-todo > .lists {
                        width: 250px;
                    }
                }

                @media only screen and (max-width: 260px) {
                    .header-todo {
                        width: 195px;
                    }
                    
                    .header-todo > h2 {
                        font-size: 30px;
                    }

                    .container-todo > .lists {
                        width: 195px;
                    }
                }

                @media only screen and (max-width: 200px) {
                    .header-todo {
                        width: 144px;
                    }    
                    
                    .header-todo > h2 {
                        font-size: 23px;
                    }

                    .container-todo > .lists {
                        width: 144px;
                    }

                    .container-todo > .lists > .list > .list-title {
                        font-size: 30px;
                    }

                    .container-button > button {
                        margin: 5px;
                    }
                }
            </style>
        `;
        
        const style = `
            <style>
                main {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-width: 100vw;
                    min-height: auto;
                    background-color: #d4d8f0;
                }

                .container-formulir {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 735px;
                    height: auto;
                    margin: 25px 0;
                    border: 3px solid #121629;
                    border-radius: 10px;
                    box-shadow: 0 7px #121629;
                    background-color: #b8c1ec;
                    transition: 0.5s;
                }

                .formulir {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    background-color: #b8c1ec;
                    transition: 0.5s;
                }

                .formulir > .value {
                    width: 600px;
                    margin: 15px 10px;
                    padding: 5px 10px;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    box-shadow: 0 7px #121629;
                    font-size: 38px;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    background-color: #fffffe;
                    transition: 0.5s;
                }

                .formulir > .value:focus {
                    border: 3px solid #d4939d;
                    box-shadow: 0 7px #d4939d;
                    outline: 0;
                }

                .formulir > .btn-add {
                    cursor: pointer;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    min-width: 44px;
                    min-height: 44px;
                    margin: 15px 10px 15px 10px;
                    padding: 5px 10px;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    box-shadow: 0 7px #121629;
                    box-sizing: border-box;
                    font-size: 22px;
                    background-color: #eebbc3;
                }

                .formulir > .btn-add:active {
                    translate: 0 5px;
                    box-shadow: 0 2px #121629;
                }

                /* Todo Progress */

                .container-todo {
                    display: flex;
                    flex-flow: column wrap;
                    justify-content: center;
                    align-items: center;
                    width: auto;
                    height: auto;
                    margin: 25px 0;
                    border: 3px solid #121629;
                    border-radius: 10px;
                    box-shadow: 0 7px #121629;
                    background-color: #b8c1ec;
                    transition: 0.5s;
                }

                .header-todo {
                    width: 100%;
                    transition: 0.5s;
                }

                .header-todo > h2 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 15px 10px;
                    padding: 5px 10px;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    font-size: 38px;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    background-color: #d4939d;
                    color: #fffffe;
                    transition: 0.5s;
                }

                .container-todo > .lists {
                    width: 725px;
                    transition: 0.5s;
                }

                .container-todo > .lists > .list {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-between;
                    align-items: center;
                    margin: 15px 10px;
                    padding: 5px 10px;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    box-shadow: 0 7px #121629;
                    font-size: 38px;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    background-color: #fffffe;
                    transition: 0.5s;
                    list-style: none;
                }

                .container-button {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                .container-button > button {
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 44px;
                    min-height: 44px;
                    margin: 15px 10px;
                    padding: 5px 10px;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    box-shadow: 0 7px #121629;
                    box-sizing: border-box;
                    font-size: 22px;
                    background-color: #eebbc3;
                }

                .container-button > button:active {
                    translate: 0 5px;
                    box-shadow: 0 2px #121629;
                }
            </style>
        `;

        this.innerHTML = `
            ${style}
            
            <main>
                <section class="container-formulir">
                    <form class="formulir" id="formulir">
                        <input type="text" class="value" id="value" placeholder="Type Here"/>
                        <button type="button" class="btn-add" id="btn-add">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </form>
                </section>
                
                <section class="container-todo">
                    <span class="header-todo">
                        <h2> Progress </h2>
                    </span>

                    <ul class="lists">
                        <li class="list">
                            <p class="list-title"> Jogging </p>

                            <section class="container-button">
                                <button type="button" class="btn-edit" id="btn-edit">
                                    <i class="fa-solid fa-pen"></i>
                                </button>

                                <button type="button" class="btn-done" id="btn-done"> 
                                    <i class="fa-solid fa-check"></i>
                                </button>
                            </section>
                        </li>
                    </ul>
                </section>

                <section class="container-todo">
                    <span class="header-todo">
                        <h2> Complete </h2>
                    </span>

                    <ul class="lists">
                        <li class="list">
                            <p class="list-title"> Reading Book </p>

                            <section class="container-button">
                                <button type="button" class="btn-undo" id="btn-undo">
                                    <i class="fa-solid fa-rotate-left"></i>
                                </button>

                                <button type="button" class="btn-delete" id="btn-delete">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </section>
                        </li>
                    </ul>
                </section>
            </main>

            ${mediaForm}

            ${mediaTodo}
        `;
    }
}

customElements.define('main-content', Main);