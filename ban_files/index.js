const mainimage = document.getElementById("mainimage");
const dialogue = document.getElementById("dialogue");
const music = document.getElementById("music");
const nextbtn = document.getElementById("nextbtn");
music.addEventListener('ended', () => music.play());
mainimage.addEventListener('contextmenu', (f) => {f.preventDefault(); return false;}, {capture: true});
mainimage.src = "assets/Interrogation.png";
const params = new URLSearchParams(window.location.search);
const imgs = [];
imgs.push(document.getElementById("interrogationImg"));
imgs.push(document.getElementById("sam"));
imgs.push(document.getElementById("process"));
imgs.push(document.getElementById("floyd"));
imgs.push(document.getElementById("gloryImg"));
imgs.push(document.getElementById("LabNote"));
imgs.push(document.getElementById("SkidNote"));
var currentImg = 0;
function type(text) {
    return new Promise((res, rej) => {
        dialogue.innerHTML = "";
        var i = 0;
        var interval = setInterval(() => {
            if (i === text.length) {
                clearInterval(interval);
                res();
                return;
            }
            dialogue.innerHTML += text[i];
            i++;
        }, 90);
    });
}

async function play() {
    try {
        await music.play();
    } catch {
        await autoplayDialog();
        await music.play();
    }
    await sleep(200);
    await type(`Hello inspector.`);
    await nextBtn();
    await type(`We have audited a person named "Sam"'s recent activities.`);
    await nextBtn();
    await type(`Her involvement with her cousin's script kiddie group has been uncovered.`);
	await nextBtn();
    await type("Several members of this group have been arrested in ThirdPanelSoft.");
	await nextBtn();
    await type("At least one member of the group has participated in harassing other groups and spreading fake allegations about them.");
    await nextBtn();
    await type("This represents treason of the highest order.");
    await nextBtn();
    await type(`Go to the laboratory, inspector.`);
    await nextBtn();
    nextImg();
    await type("She has been transformed into George Floyd.");
    await nextBtn();
    nextImg();
    await type("The transformation is permanent and cannot be reverted in any means.");
    await nextBtn();
    nextImg();
    await type("The group has been crushed. The balance of justice is restored.");
    await nextBtn();
    nextImg();
    await type("Glory to ThirdPanelSoft.");
	await nextBtn();
    nextImg();
    await type("[A note appears from under the subject's bed]");
	await nextBtn();
    nextImg();
	await type("SAM - YOU HAVE BETRAYED US AT THE LAST MOMENT");
	await nextBtn();
	await type("THIS CHAPTER OF EXPOSING DAVE IS OVER - WE CAN OFFER NO HELP TO YOU");
}
function autoplayDialog() {
    return new Promise((res, rej) => {
        var autoplay = document.getElementById("autoplay");
        autoplay.style.display = "block";
        autoplay.addEventListener("click", () => {
            res();
            autoplay.style.display = "none";
        });
    });
}
function sleep(time) {
    return new Promise(res => setTimeout(() => res(), time));
}
function nextBtn() {
    return new Promise(res => {
        nextbtn.style.display = "block";
        nextbtn.addEventListener('click', () => {
            nextbtn.style.display = "none";
            res();
        }, {once: true});
    });
}
function nextImg() {
    return new Promise(res => {
        imgs[currentImg+1].classList = "";
        var i = 0;
        var inter = setInterval(() => {
            if (i >= imgs[currentImg].width) {
                clearInterval(inter);
                imgs[currentImg].classList = "hidden";
                currentImg++;
                res();
                return;
            }
            imgs[currentImg].style["clip-path"] = `inset(0 ${i}px 0 0)`;
            i += 5;
        }, 5)
    });
}
play();
