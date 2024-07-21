const style = `
    <style>
        dialog {
            width: 550px; 
            padding: 8px;
            left: 50%;
            top: 50%;
            translate: -50% -50%;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            border: 3px solid #121629;
            border-radius: 10px;
            box-shadow: 0 8px #121629;
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

        .dialog-navbar > h2 {
            padding: 0 5px;
            font-size: 28px;
            border-left: 5px solid #d4939d;
            color: #232946;
        }

        .dialog-navbar > #close-info {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 44px;
            min-height: 44px;
            box-sizing: border-box;
            font-size: 30px;
            border: none;
            background-color: #fffffe;
            color: #232946;
        }

        .dialog-navbar > #close-info:hover {
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
            <h2> About </h2>    
            
            <button id="close-info">
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
        </section>

        <section class="information">
            <p> Paragraph </p>
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