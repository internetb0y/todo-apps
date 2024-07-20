const style = `
    <style>
        dialog {
            left: 50%;
            top: 50%;
            translate: -50% -50%;
            border: 3px solid #121629;
            box-shadow: -8px 8px #fffffe;
            background-color: #232946;
        }

        dialog::backdrop {
            background-color: rgba(35, 41, 70, 0.4);
        }

        .dialog-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        #close-info {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 44px;
            min-height: 44px;
            box-sizing: border-box;
            font-size: 20px;
            background-color: #b8c1ec00;
            color: #fffffe;
        }
    </style>
    `;

const dialog = document.createElement('dialog');
dialog.innerHTML = `
    ${style}

    <article class="dialog-container">
        <button id="close-info">
            <i class="fa-solid fa-xmark"></i>
        </button>
    
        <section class="information">
            <h2> Information </h2>
        </section>
    </article>
    `;

const body = document.querySelector('body');
body.appendChild(dialog);

const openInfo = document.querySelector('#open-info').addEventListener('click', () => {
    dialog.showModal();
});

const closeInfo = document.querySelector('#close-info').addEventListener('click', () => {
    dialog.close();
});