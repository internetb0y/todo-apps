class Todo extends HTMLElement {
    constructor () {
        super();
        this.connectedCallback();
    }

    connectedCallback () {
        const mediaForm = `
            <style>
                @media only screen and (max-width: 980px) {
                    form > #value-todo {
                        width: 550px;
                    }
                }

                @media only screen and (max-width: 780px) {
                    form > #value-todo {
                        width: 450px;
                    }
                }

                @media only screen and (max-width: 680px) {
                    form > #value-todo {
                        width: 400px;
                    }
                }

                @media only screen and (max-width: 580px) {
                    form > #value-todo {
                        width: 280px;
                    }
                }

                @media only screen and (max-width: 480px) {
                    form {
                        width: 300px;
                    }
                    
                    form > #value-todo {
                        width: 260px;
                    }

                    form > #add-todo {
                        margin: 0 0 15px 0;
                    }
                }

                @media only screen and (max-width: 320px) {
                    form {
                        width: 260px;
                    }
                    
                    form > #value-todo {
                        width: 230px;
                    }
                }

                @media only screen and (max-width: 260px) {
                    form {
                        width: 200px;
                    }
                    
                    form > #value-todo {
                        width: 180px;
                        font-size: 30px;
                    }
                }

                @media only screen and (max-width: 200px) {
                    form {
                        width: 150px;
                    }
                    
                    form > #value-todo {
                        width: 125px;
                        font-size: 20px;
                    }
                }
            </style>
        `;

        const mediaTodo = `
            <style>
                @media only screen and (max-width: 980px) {
                    
                }
            </style>
        `;
        
        const style = `
            <style>
                main {
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: center;
                    align-items: center;
                    min-width: 100vw;
                    min-height: auto;
                    background-color: #d4d8f0;
                }

                form {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    align-items: center;
                    width: auto;
                    height: auto;
                    margin: 25px 0;
                    border: 3px solid #121629;
                    border-radius: 10px;
                    background-color: #b8c1ec;
                    box-shadow: 0 7px #121629;
                    transition: 0.5s;
                }

                form > #value-todo {
                    width: 650px;
                    font-size: 38px;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    padding: 5px 10px;
                    margin: 15px 10px;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    background-color: #fffffe;
                    box-shadow: 0 7px #121629;
                    transition: 0.5s;
                }

                form > #value-todo:focus {
                    outline: 0;
                    border: 3px solid #d4939d;
                    box-shadow: 0 7px #d4939d;
                }

                form > #add-todo {
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 44px;
                    min-height: 44px;
                    margin: 15px 10px 15px 0;
                    padding: 5px 10px;
                    font-size: 22px;
                    box-sizing: border-box;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    background-color: #eebbc3;
                    box-shadow: 0 7px #121629;
                }

                form > #add-todo:active {
                    translate: 0 5px;
                    box-shadow: 0 2px #121629;
                }

                /* Todo Progress */

                .progress-todo, .complete-todo {
                    display: flex;
                    flex-flow: column wrap;
                    justify-content: center;
                    align-items: center;
                    width: auto;
                    height: auto;
                    margin: 25px 0;
                    border: 3px solid #121629;
                    border-radius: 10px;
                    background-color: #b8c1ec;
                    box-shadow: 0 7px #121629;
                    transition: 0.5s;
                }

                span {
                    width: 725px;
                }

                span > h2 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 38px;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    padding: 5px 10px;
                    margin: 15px 10px;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    background-color: #d4939d;
                    color: #fffffe;
                }

                section > ul {
                    width: 725px;
                }

                section > ul > li {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 38px;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    padding: 5px 10px;
                    margin: 15px 10px;
                    list-style: none;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    background-color: #fffffe;
                    box-shadow: 0 7px #121629;
                    transition: 0.5s;
                }

                .btn-progress, .btn-complete {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                .btn-progress > button, .btn-complete > button {
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 44px;
                    min-height: 44px;
                    margin: 15px 10px;
                    padding: 5px 10px;
                    font-size: 22px;
                    box-sizing: border-box;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    background-color: #eebbc3;
                    box-shadow: 0 7px #121629;
                }

                .btn-progress > button:active, .btn-complete > button:active {
                    translate: 0 5px;
                    box-shadow: 0 2px #121629;
                }
            </style>
        `;

        this.innerHTML = `
            ${style}
            
            <main>
                <form>
                    <input type="text" id="value-todo" placeholder="Type Here"/>
                    <button type="button" id="add-todo"> 
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </form>
                
                <section class="progress-todo">
                    <span>
                        <h2> Progress </h2>
                    </span>

                    <ul>
                        <li>
                            <p> One </p>

                            <section class="btn-progress">
                                <button type="button" id="edit-todo"> 
                                    <i class="fa-solid fa-pen"></i>
                                </button>

                                <button type="button" id="done-todo"> 
                                    <i class="fa-solid fa-check"></i>
                                </button>
                            </section>
                        </li>
                    </ul>
                </section>

                <section class="complete-todo">
                    <span>
                        <h2> Complete </h2>
                    </span>

                    <ul>
                        <li>
                            <p> One </p>

                            <section class="btn-complete">
                                <button type="button" id="undo-todo"> 
                                    <i class="fa-solid fa-rotate-left"></i>
                                </button>

                                <button type="button" id="delete-todo"> 
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

customElements.define('todo-menu', Todo);