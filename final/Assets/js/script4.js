
const buttonmuffin = document.getElementById("pic-muffin");
const socialMediaIcons = document.getElementById("social-media");

socialMediaIcons.style.display = "none";


buttonmuffin.addEventListener("click", event => {
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

