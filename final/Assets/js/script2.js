
const buttonshelly = document.getElementById("pic-shelly");
const socialMediaIcons = document.getElementById("social-media");

socialMediaIcons.style.display = "none";


buttonshelly.addEventListener("click", event => {
    toggleSocialMediaIcons();
});



function toggleSocialMediaIcons() {
    const contact = window.getComputedStyle(socialMediaIcons);
    if (contact.display === "none") {
        socialMediaIcons.style.display = "inline";
    } 
    
    else {
        socialMediaIcons.style.display = "none";
    }
}


