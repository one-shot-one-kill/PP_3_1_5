async function getOneUser(id) {
    let url = "http://localhost:8080/admin/user/" + id;
    let response = await fetch(url);
    return await response.json();
}