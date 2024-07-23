const style = `
    <style>
        dialog {
            top: 50%;
            left: 50%;
            translate: -50% -50%;
            width: 550px;
            padding: 8px;
            border: 3px solid #121629;
            border-radius: 10px;
            box-shadow: 0 8px #121629;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            background-color: #fffffe;
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

        .dialog-navbar {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            border-bottom: 3px solid #121629;
        }

        .dialog-navbar > .dialog-title {
            padding: 0 5px;
            border-left: 5px solid #d4939d;
            font-size: 30px;
            color: #232946;
        }

        .dialog-navbar > #dialog-close {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 44px;
            min-height: 44px;
            border: none;
            box-sizing: border-box;
            font-size: 30px;
            background-color: #fffffe;
            color: #232946;
        }

        .dialog-navbar > #dialog-close:hover {
            color: #d4939d;
        }

        .information {
            width: 100%;
            margin: 5px 0;
            padding: 5px 0;
            color: #232946;
        }
    </style>
    `;

const dialog = document.createElement('dialog');
dialog.innerHTML = `
    ${style}

    <article class="dialog-container">
        <section class="dialog-navbar">
            <h2 class="dialog-title"> About </h2>
            
            <button class="dialog-close" id="dialog-close">
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
        </section>

        <section class="information">
            <p class="information-detail">
                Put The Detail Of This Website Here
            </p>
        </section>
    </article>
    `;

const body = document.querySelector('body');
body.appendChild(dialog);

const openInfo = document.querySelector('#dialog-open').addEventListener('click', () => {
    dialog.showModal();
});

const closeInfo = document.querySelector('#dialog-close').addEventListener('click', () => {
    dialog.close();
});