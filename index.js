// document.getElementById("count-el").innerText = 5

let count = 0;

function increment() {
    count ++;
    document.getElementById('count-el').innerText = count;
}

function save() {
    const results = document.getElementById('save-el');
    results.textContent += count + " - ";
    count = 0;
    document.getElementById("count-el").innerText = 0;

}