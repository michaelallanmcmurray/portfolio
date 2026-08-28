function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("load", reveal);
window.addEventListener("scroll", reveal);

var navToggle = document.querySelector(".nav-toggle");
var navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
        var isOpen = navLinks.classList.toggle("open");
        navToggle.classList.toggle("active", isOpen);
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
            navToggle.classList.remove("active");
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute("aria-label", "Open menu");
        });
    });
}

var auditForm = document.getElementById("audit-request-form");
var auditFormStatus = document.getElementById("audit-form-status");

if (auditForm && auditFormStatus) {
    auditForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!auditForm.checkValidity()) {
            auditFormStatus.hidden = false;
            auditFormStatus.className = "form-status error";
            auditFormStatus.textContent = "Please fill in the required fields.";
            return;
        }

        var formData = new FormData(auditForm);
        var business = formData.get("business");
        var subject = encodeURIComponent("Free listing audit request: " + business);
        var body = encodeURIComponent(
            "Name: " + formData.get("name") + "\n" +
            "Business: " + business + "\n" +
            "Website: " + (formData.get("website") || "N/A") + "\n" +
            "Email: " + formData.get("email") + "\n" +
            "Phone: " + (formData.get("phone") || "N/A")
        );

        auditFormStatus.hidden = false;
        auditFormStatus.className = "form-status success";
        auditFormStatus.innerHTML =
            "Thanks. This is a local mockup, so nothing was sent yet. " +
            '<a href="mailto:hello@michaelallanmcmurray.com?subject=' + subject + "&body=" + body + '">' +
            "Open a pre-filled email instead</a>.";

        auditForm.reset();
    });
}
