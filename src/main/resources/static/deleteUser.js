'use strict';

let deleteForm = document.forms["formDelete"]

async function deleteModal(id) {
    fetch("http://localhost:8080/admin/roles")
        .then(r => r.json())
        .then(roles => {
            roles.forEach(role => {
                let element = document.createElement("option");
                element.text = role.role.substring(5);
                element.value = role.id;
                $('#Edit_rolesId1')[0].appendChild(element);
            })
        })

    const modal = new bootstrap.Modal(document.querySelector('#delete'));
    await openAndFillInTheModal(deleteForm, modal, id);
    switch (deleteForm.roles.value) {
        case '1':
            deleteForm.roles.value = 'ADMIN';
            break;
        case '2':
            deleteForm.roles.value = 'USER';
            break;
    }
    deleteUser()
}

function deleteUser() {
    deleteForm .addEventListener("submit", ev => {
        ev.preventDefault();
        fetch("http://localhost:8080/admin/user/" + deleteForm.id.value, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            $('#closeDelete').click();
            getTableUser();
        });
    });
}