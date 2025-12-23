let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';
let editingId = null;

const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clearCompleted');

// Set minimum date to today
taskDate.min = new Date().toISOString().split('T')[0];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function updateStats() {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const active = total - completed;

    document.getElementById('totalTasks').textContent = total;
    document.getElementById('activeTasks').textContent = active;
    document.getElementById('completedTasks').textContent = completed;

    clearCompletedBtn.style.display = completed > 0 ? 'block' : 'none';
}

function formatDate(dateString) {
    if (!dateString) return null;
    
    const date = new Date(dateString + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const diffTime = date - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
        return { text: 'Today', class: 'today' };
    } else if (diffDays === 1) {
        return { text: 'Tomorrow', class: '' };
    } else if (diffDays < 0) {
        return { text: `${Math.abs(diffDays)} days overdue`, class: 'overdue' };
    } else if (diffDays <= 7) {
        return { text: `In ${diffDays} days`, class: '' };
    } else {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return { text: date.toLocaleDateString('en-US', options), class: '' };
    }
}

function isOverdue(dateString) {
    if (!dateString) return false;
    const taskDate = new Date(dateString + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return taskDate < today;
}

function isToday(dateString) {
    if (!dateString) return false;
    const taskDate = new Date(dateString + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return taskDate.getTime() === today.getTime();
}

function isUpcoming(dateString) {
    if (!dateString) return false;
    const taskDate = new Date(dateString + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return taskDate > today;
}

function addTodo(text, date) {
    if (text.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const todo = {
        id: Date.now(),
        text: text.trim(),
        date: date || null,
        completed: false,
        createdAt: new Date().toISOString()
    };

    todos.unshift(todo);
    saveTodos();
    renderTodos();
    taskInput.value = '';
    taskDate.value = '';
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
}

function deleteTodo(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        todos = todos.filter(t => t.id !== id);
        saveTodos();
        renderTodos();
    }
}

function startEdit(id) {
    editingId = id;
    renderTodos();
}

function saveEdit(id, newText, newDate) {
    if (newText.trim() === '') {
        alert('Task cannot be empty!');
        return;
    }

    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.text = newText.trim();
        todo.date = newDate || null;
        editingId = null;
        saveTodos();
        renderTodos();
    }
}

function cancelEdit() {
    editingId = null;
    renderTodos();
}

function filterTodos() {
    let filteredTodos = todos;

    switch(currentFilter) {
        case 'active':
            filteredTodos = todos.filter(t => !t.completed);
            break;
        case 'completed':
            filteredTodos = todos.filter(t => t.completed);
            break;
        case 'today':
            filteredTodos = todos.filter(t => isToday(t.date));
            break;
        case 'upcoming':
            filteredTodos = todos.filter(t => isUpcoming(t.date));
            break;
        default:
            filteredTodos = todos;
    }

    return filteredTodos;
}

function renderTodos() {
    const filteredTodos = filterTodos();

    if (filteredTodos.length === 0) {
        todoList.innerHTML = `
            <div class="empty-state">
                <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
                </svg>
                <p>${getEmptyMessage()}</p>
            </div>
        `;
    } else {
        todoList.innerHTML = filteredTodos.map(todo => {
            if (editingId === todo.id) {
                return `
                    <li class="todo-item">
                        <div class="edit-section">
                            <input type="text" class="edit-input" value="${todo.text}" id="edit-text-${todo.id}" />
                            <input type="date" class="edit-date" value="${todo.date || ''}" id="edit-date-${todo.id}" min="${new Date().toISOString().split('T')[0]}" />
                            <div class="todo-actions">
                                <button class="btn save-btn" onclick="saveEdit(${todo.id}, document.getElementById('edit-text-${todo.id}').value, document.getElementById('edit-date-${todo.id}').value)">Save</button>
                                <button class="btn cancel-btn" onclick="cancelEdit()">Cancel</button>
                            </div>
                        </div>
                    </li>
                `;
            }

            const dateInfo = todo.date ? formatDate(todo.date) : null;
            const overdue = !todo.completed && todo.date && isOverdue(todo.date);

            return `
                <li class="todo-item ${todo.completed ? 'completed' : ''} ${overdue ? 'overdue' : ''}">
                    <input type="checkbox" class="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${todo.id})" />
                    <div class="todo-content">
                        <span class="todo-text">${todo.text}</span>
                        ${dateInfo ? `
                            <div class="todo-date">
                                <span class="date-badge ${dateInfo.class}">📅 ${dateInfo.text}</span>
                            </div>
                        ` : ''}
                    </div>
                    <div class="todo-actions">
                        <button class="btn edit-btn" onclick="startEdit(${todo.id})">Edit</button>
                        <button class="btn delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
                    </div>
                </li>
            `;
        }).join('');
    }

    updateStats();
}

function getEmptyMessage() {
    switch(currentFilter) {
        case 'active':
            return 'No active tasks! Time to add some.';
        case 'completed':
            return 'No completed tasks yet. Keep working!';
        case 'today':
            return 'No tasks scheduled for today.';
        case 'upcoming':
            return 'No upcoming tasks scheduled.';
        default:
            return 'No tasks yet. Add one above!';
    }
}

function clearCompleted() {
    if (confirm('Are you sure you want to clear all completed tasks?')) {
        todos = todos.filter(t => !t.completed);
        saveTodos();
        renderTodos();
    }
}

// Event Listeners
addBtn.addEventListener('click', () => {
    addTodo(taskInput.value, taskDate.value);
});

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo(taskInput.value, taskDate.value);
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTodos();
    });
});

clearCompletedBtn.addEventListener('click', clearCompleted);

// Initial render
renderTodos();