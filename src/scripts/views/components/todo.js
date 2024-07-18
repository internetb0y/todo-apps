class Todo extends HTMLElement {
    constructor () {
        super();
        this.connectedCallback();
    }

    connectedCallback () {
        const mediaOne = `
            <style>
                @media only screen and (max-width: 980px) {
                    form > #todo {
                        width: 550px;
                    }
                }

                @media only screen and (max-width: 780px) {
                    form > #todo {
                        width: 450px;
                    }
                }

                @media only screen and (max-width: 680px) {
                    form > #todo {
                        width: 400px;
                    }
                }

                @media only screen and (max-width: 580px) {
                    form > #todo {
                        width: 280px;
                    }
                }

                @media only screen and (max-width: 480px) {
                    form {
                        width: 300px;
                    }
                    
                    form > #todo {
                        width: 260px;
                    }
                }

                @media only screen and (max-width: 320px) {
                    form {
                        width: 260px;
                    }
                    
                    form > #todo {
                        width: 230px;
                    }
                }

                @media only screen and (max-width: 260px) {
                    form {
                        width: 200px;
                    }
                    
                    form > #todo {
                        width: 180px;
                        font-size: 30px;
                    }
                }

                @media only screen and (max-width: 200px) {
                    form {
                        width: 150px;
                    }
                    
                    form > #todo {
                        width: 125px;
                        font-size: 20px;
                    }
                }
            </style>
        `;

        const mediaTwo = `
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
                    min-width: 80vw;
                    min-height: auto;
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
                    box-shadow: 0 5px #121629;
                    transition: 0.5s;
                }

                form > #todo {
                    width: 650px;
                    font-size: 38px;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    padding: 5px 10px;
                    margin: 15px 10px;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    box-shadow: 0 7px #121629;
                    transition: 0.5s;
                }

                form > #todo:focus {
                    outline: 0;
                    border: 3px solid #b8c1ec;
                    box-shadow: 0 7px #b8c1ec;
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
                    font-size: 20px;
                    box-sizing: border-box;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    box-shadow: 0 7px #121629;
                    background-color: #eebbc3;
                }

                form > #add-todo:active {
                    translate: 0 5px;
                    box-shadow: 0 2px #121629;
                }
            </style>
        `;

        this.innerHTML = `
            ${style}
            
            <main>
                <form>
                    <input type="text" id="todo" placeholder="Type Here"/>
                    <button type="button" id="add-todo"> 
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </form>
            </main>

            ${mediaOne}

            ${mediaTwo}
        `;
    }
}

customElements.define('todo-menu', Todo);