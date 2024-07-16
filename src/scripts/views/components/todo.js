class Todo extends HTMLElement {
    constructor () {
        super();
        this.render();
    }

    render () {
        const style = `
            <style>
                main {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-between;
                    min-width: 60vw;
                    min-height: 90vh;
                    border: 1px solid black;
                }

                div {
                    width: 200px;
                    height: 200px;
                    background-color: salmon;
                }
            </style>
        `;

        this.innerHTML = `
            ${style}
            
            <main>
                <div> 1 </div>
                <div> 2 </div>
                <div> 3 </div>
                <div> 4 </div>
                <div> 5 </div>
            </main>
        `;
    }
}

customElements.define('todo-menu', Todo);