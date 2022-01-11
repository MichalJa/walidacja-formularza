
let form = document.getElementById('form');
let checkAll = document.getElementById('checkAll');




const validate = (event) => {

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let checkOne = document.getElementById('checkOne');
    // let checkTwo = document.getElementById('checkTwo');
    let error = document.getElementById('errors');
    error.innerHTML = '';

    if (name.value.trim() === '') {
        let li = document.createElement('li');
        li.innerText = 'Wpisz imie i nazwisko';
        error.appendChild(li);
    }

    if (email.value.trim() === '') {
        let li = document.createElement('li');
        li.innerText = 'Wpisz e-mail';
        error.appendChild(li);
    }

    if (!email.value.includes('@')) {
        let li = document.createElement('li');
        li.innerText = 'e-mail musi zawierać "@"';
        error.appendChild(li);
    }

    if (!checkOne.checked) {
        let li = document.createElement('li');
        li.innerText = 'Nie wyraziłeś zgody 1';
        error.appendChild(li);
    }

    // if (!checkTwo.checked) {
    //     let li = document.createElement('li');
    //     li.innerText = 'Nie wyraziłeś zgody 2';
    //     error.appendChild(li);
    // }

    if (error.children.length > 0) {
        event.preventDefault();
    }


}


const allAgree = (event) => {
    let checkOne = document.getElementById('checkOne');
    let checkTwo = document.getElementById('checkTwo');
    checkOne.checked = event.target.checked;
    checkOne.disabled = event.target.checked;
    checkTwo.checked = event.target.checked;
    checkTwo.disabled = event.target.checked;
}


form.addEventListener('submit', validate);
checkAll.addEventListener('change', allAgree);