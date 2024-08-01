const modal = () => {
    const dialog = document.querySelector('.about');

    const openInfo = document.querySelector('#dialog-open').addEventListener('click', () => {
        dialog.showModal();
    });

    const closeInfo = document.querySelector('#dialog-close').addEventListener('click', () => {
        dialog.close();
    });
}

export default modal;