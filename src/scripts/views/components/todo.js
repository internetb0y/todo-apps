class Todo extends HTMLElement {
    constructor () {
        super();
        this.connectedCallback();
    }

    connectedCallback () {
        const media = `
            <style>
                @media only screen and (max-width: 500px) {
                    
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
                    min-height: 100vh;
                    border: 2px solid red;
                }

                form {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    align-items: center;
                    width: 55%;
                    height: auto;
                    border: 2px solid black;
                    border-radius: 10px;
                    box-shadow: 0 5px black;
                }

                form > #todo {
                    min-width: 60%;
                    font-size: 38px;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    padding: 5px 10px;
                    margin: 15px 10px;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    box-shadow: 0 7px #232946;
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
                    font-size: 20px;
                    margin: 15px 10px;
                    padding: 5px 10px;
                    box-sizing: border-box;
                    border: 3px solid #121629;
                    border-radius: 15px;
                    background-color: #eebbc3;
                    box-shadow: 0 7px #232946;
                }

                form > #add-todo:active {
                    translate: 0 5px;
                    box-shadow: 0 2px #232946;
                }

                .todo-container {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    align-items: center;
                    width: 55%;
                    height: auto;
                    margin: 30px 0 0 0;
                    padding: 8px;
                    gap: 20px;
                    border: 2px solid black;
                }

                .todo-container > .todo-progress, .todo-container > .todo-complete {
                    width: 48%;
                    border: 1px solid black;
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

                <section class="todo-container">
                    <section class="todo-progress">
                    </section>

                    <section class="todo-complete">
                    </section>
                </section>
            </main>

            ${media}
        `;
    }
}

customElements.define('todo-menu', Todo);