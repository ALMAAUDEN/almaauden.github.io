window.onload = () => {
    this.webm = document.querySelector("#main");
    setSize();
    this.webm.onclick = () => open(window.location.href, `popup${Math.random()}`, `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000`);
};

window.onresize = () => setSize();

const setSize = () => {
    this.webm.width = window.innerWidth
    this.webm.height = window.innerHeight
    this.webm.style.width = window.innerWidth + "px";
    this.webm.style.height = window.innerHeight + "px";
};