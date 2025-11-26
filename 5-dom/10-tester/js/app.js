const elements = document.body.querySelectorAll("*");
const tooltip = document.createElement("div");
tooltip.style.position = "fixed";
tooltip.style.top = "-99999px";
tooltip.style.right = "10px";
tooltip.style.background = "rgba(0,0,0,0.7)";
tooltip.style.color = "#fff";
tooltip.style.padding = "4px 8px";
tooltip.style.fontSize = "12px";
tooltip.style.borderRadius = "4px";
tooltip.style.zIndex = "9999";
document.body.appendChild(tooltip);

elements.forEach(el => {
    const hue = Math.floor(Math.random() * 361);
    el.setAttribute("data-my-debug-color", hue);
    el.style.outline = `2px solid hsl(${hue}, 100%, 60%)`;

    el.addEventListener("mouseenter", () => {
        const h = el.getAttribute("data-my-debug-color");
        el.style.backgroundColor = `hsla(${h}, 100%, 60%, 0.2)`;
        const rect = el.getBoundingClientRect();
        tooltip.textContent = `W:${Math.round(rect.width)}px H:${Math.round(rect.height)}px`;
        tooltip.style.top = "10px";
    });

    el.addEventListener("mouseleave", () => {
        el.style.backgroundColor = "";
        tooltip.style.top = "-99999px";
    });
});