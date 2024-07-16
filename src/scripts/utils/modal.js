const dialog = document.createElement('dialog')
dialog.innerHTML = `
    <article class="dialog-container">
        <section>
            <button id="close-info">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </section>
    </article>
    `

const body = document.querySelector('body')
body.appendChild(dialog)

const openInfo = document.querySelector('#open-info').addEventListener('click', () => {
    dialog.showModal()
})

const closeInfo = document.querySelector('#close-info').addEventListener('click', () => {
    dialog.close()
})