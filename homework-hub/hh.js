document.getElementById("openbtn").addEventListener("click", toggleSidebar);
document.addEventListener("keydown", e => {
    if(e.key.toLowerCase() === "s") {
        toggleSidebar();
    }
});


function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    let sidebarWidth = sidebar.style.width;
    
    sidebar.style.width = sidebarWidth === "250px" ? "0px" : "250px";

    sidebarWidth = sidebar.style.width;

    const openbtn = document.querySelector(".openbutton");
    openbtn.style.left = sidebarWidth === "0px" ? "10px" : "260px";
}