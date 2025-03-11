function modalActivate() {
    let modalReg = document.getElementById('modal-reg');
    let modalLogin = document.getElementById('modal-login');
    let modalBlur = document.getElementById('modal-blur');

    if (modalReg.classList.contains('modal-invis')) {
        if (!modalLogin.classList.contains('modal-invis')) {
            modalLogin.classList.add('modal-invis')
            document.body.classList.remove('no-scroll');
            document.body.classList.remove('modal-blur');
        }
        else {
            modalReg.classList.remove('modal-invis');
            document.body.classList.add('no-scroll');
            document.body.classList.add('modal-blur');
        }
    }
    else {
        modalReg.classList.add('modal-invis');
        document.body.classList.remove('modal-blur');
        document.body.classList.remove('no-scroll');
    }
}

function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("active");
}

// Переключение между регистрацией и авторизацией
function toggleModal() {
    let modalReg = document.getElementById('modal-reg');
    let modalLogin = document.getElementById('modal-login');

    // Скрываем одно окно и показываем другое
    if (modalReg.classList.contains('modal-invis')) {
        modalLogin.classList.add('modal-invis');
        modalReg.classList.remove('modal-invis');
    } else {
        modalReg.classList.add('modal-invis');
        modalLogin.classList.remove('modal-invis');
    }
}

function listActivate(id) {
    if (id.classList.contains('visible'))
        id.classList.remove('visible');
    else
        id.classList.add('visible');
}

function toggleReviews() {
    document.querySelectorAll(".review.ohio").forEach(review => {
        review.classList.toggle("hidden");
    });
    let button = document.querySelector(".show-more");
    button.textContent = button.textContent === "Показать больше" ? "Скрыть" : "Показать больше";
}