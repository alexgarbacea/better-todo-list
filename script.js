
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = toDo => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center text-light">
            <span>${toDo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;//append, not change
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const toDo = addForm.add.value.trim();

    if(toDo.length){
        generateTemplate(toDo);
        addForm.reset();
    }
});

//delete
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = term => {
    Array.from(list.children)//add filtered class
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'))

    Array.from(list.children)//remove filtered class
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'))
}

//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})