let copyFlower = 0;

function dragstartHandler(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
    ev.preventDefault();
}

function dropHandler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const original = document.getElementById(data);
    if (!original) return;

    const box = ev.currentTarget;
    const rect = box.getBoundingClientRect();

    let item;
    if (original.parentElement === box){
        item = original
    }

    const item = original.cloneNode(true);
    item.id = "copy_" + (++copyFlower);
    item.addEventListener("dblclick", () => item.removeChild());
    box.appendChild(item);

    item.style.position = "absolute";
    item.style.left = (ev.clientX - rect.left - item.width /2 ) + "px";
    item.style.top = (ev.clientY - rect.top - item.height /2) + "px";
}