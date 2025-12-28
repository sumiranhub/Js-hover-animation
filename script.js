// Yo section le chai page lai initial setup garcha
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.height = '100vh';
document.body.style.backgroundColor = 'white';

const container = document.getElementsByClassName("container")[0]; //first container ko contents select garcha 0 le
container.style.display = 'grid';
container.style.gridTemplateColumns = '1fr 1fr'; // column lai 2 ota equal parts ma divide garcha
container.style.gridTemplateRows = '1fr 1fr'; // row lai 2 ota equal part ma divide garcha
container.style.height = '100vh'; 

const box = document.getElementsByClassName("box");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");

for (let i = 0; i < box.length; i++) { // i=0 deki cuz js ma index 0 dekhi suru huncha aani container box ma box[0] le box1 lai point garcha sameas container[0], aani box.length ma .length le kati ota ids ko class box cha vanera count garcha 
    box[i].style.display = 'flex'; // container vitra ko content lai felxible garcha
    box[i].style.justifyContent = 'center'; //horizontally center ma align garcha
    box[i].style.alignItems = 'center'; // vertically center ma align garcha
    box[i].style.color = 'transparent';
    box[i].style.borderRadius = '10px';
    box[i].style.fontSize = '34px';
    box[i].style.transition = 'all 0.3s ease-in-out';
}

box1.addEventListener('mouseenter', () => { //() kina vanda kheri mouse ko event or kei target lai trigger garnu pardaina so event use nahaneko
    box1.style.backgroundColor = '#2563EB';
    box1.style.color = '#DC2626';
    box1.textContent = "This is Box 1";
    box1.style.cursor = 'pointer';
    box1.style.boxShadow = '5px 5px 15px #2563EB'; 
    box1.style.zIndex = '10'; // hover garda aagadi auncha
});
box1.addEventListener('mouseleave', () => {
    box1.style.backgroundColor = 'white';
    box1.style.color = 'transparent';
    box1.style.cursor = 'default';
    box1.style.boxShadow = 'none';
    box1.style.zIndex = '0'; // hover nagarda pichadi jancha
});

box2.addEventListener('mouseenter', () => {
    box2.style.backgroundColor = '#DC2626';
    box2.style.color = '#FFFF00';
    box2.textContent = "This is Box 2";
    box2.style.cursor = 'crosshair';
    box2.style.boxShadow = '5px 5px 15px #DC2626';
    box2.style.zIndex = '10';
});
box2.addEventListener('mouseleave', () => {
    box2.style.backgroundColor = 'white';
    box2.style.color = 'transparent';
    box2.style.cursor = 'default';
    box2.style.boxShadow = 'none';
    box2.style.zIndex = '0';
});

box3.addEventListener('mouseenter', () => {
    box3.style.backgroundColor= '#FFFF00';
    box3.style.color = '#FFA500';
    box3.textContent = "This is Box 3";
    box3.style.cursor = 'grab';
    box3.style.boxShadow = '5px 5px 15px #FFFF00';
    box3.style.zIndex = '10';

});
box3.addEventListener('mouseleave', () => {
    box3.style.backgroundColor = 'white';
    box3.style.color = 'transparent';
    box3.style.cursor = 'default';
    box3.style.boxShadow = 'none';
    box3.style.zIndex = '0';
});

box4.addEventListener('mouseenter', () => {
    box4.style.backgroundColor = '#FFA500';
    box4.style.color = '#2563EB';
    box4.textContent = "This is Box 4";
    box4.style.cursor = 'move';
    box4.style.boxShadow = '5px 5px 15px #FFA500';
    box4.style.zIndex = '10';
});
box4.addEventListener('mouseleave', () => {
    box4.style.backgroundColor = 'white';
    box4.style.color = 'transparent';
    box4.style.cursor = 'default';
    box4.style.boxShadow = 'none';
    box4.style.zIndex = '0';
});
