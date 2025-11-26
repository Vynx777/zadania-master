const API_URL = "http://localhost:3000/users";

let page = 1;
let limit = 10;
let sortField = "";
let sortOrder = "";
let maxPage = 1;

const tbody = document.querySelector("tbody");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const form = document.querySelector(".form");

async function loadData() {
    const params = new URLSearchParams();
    params.append("_page", page);
    params.append("_limit", limit);
    if (sortField) params.append("_sort", sortField);
    if (sortOrder) params.append("_order", sortOrder);

    const formData = new FormData(form);
    for (let [key, value] of formData.entries()) {
        if (value.trim() !== "") params.append(key, value.trim());
    }

    const url = `${API_URL}?${params.toString()}`;
    const res = await fetch(url);
    const totalHeader = res.headers.get("X-Total-Count");
    const total = totalHeader !== null ? parseInt(totalHeader, 10) : null;
    const data = await res.json();

    renderTable(data);

    if (total !== null && !isNaN(total)) {
        maxPage = Math.max(1, Math.ceil(total / limit));
    } else {
        maxPage = page;
    }

    prevBtn.disabled = page <= 1;
    nextBtn.disabled = total !== null ? page >= maxPage : false;
}

function renderTable(data) {
    tbody.innerHTML = "";
    data.forEach(user => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</td>
            <td>${user.gender}</td>
            <td>${user.ip_address}</td>
        `;
        tbody.appendChild(tr);
    });
}

form.addEventListener("submit", e => {
    e.preventDefault();
    page = 1;
    loadData();
});

form.addEventListener("reset", () => {
    setTimeout(() => {
        page = 1;
        loadData();
    }, 0);
});

prevBtn.addEventListener("click", () => {
    if (page > 1) {
        page--;
        loadData();
    }
});

nextBtn.addEventListener("click", () => {
    if (page < maxPage) {
        page++;
        loadData();
    }
});

document.querySelectorAll("th").forEach(th => {
    th.addEventListener("click", () => {
        const field = th.dataset.id;
        if (sortField === field) {
            sortOrder = sortOrder === "asc" ? "desc" : "asc";
        } else {
            sortField = field;
            sortOrder = "asc";
        }
        page = 1;
        loadData();
    });
});

loadData();
