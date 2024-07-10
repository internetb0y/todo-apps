class Navbar extends HTMLElement {
    constructor () {
        super()
        this.render()
    }

    render () {
        this.innerHTML = `
        `
    }
}

customElements.define('nav-bar', Navbar)