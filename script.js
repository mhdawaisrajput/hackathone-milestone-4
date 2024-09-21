var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profileImageInput = document.getElementById('profileimage');
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profileImageInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profileImageFile = (_a = profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profileimageURL = profileImageFile ? URL.createObjectURL(profileImageFile) : '';
        var resumeOutput = "\n    <h2>Resume</h2>\n\n    ".concat(profileimageURL ? "<img src=\"".concat(profileimageURL, "\" alt=\"Profile Image\" class=\"profileimage\" ") : "", ";\n\n    <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </p>\n    <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n    <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n    \n    <h3>Education</h3>\n    <p id=\"edit-education\" class=\"editable\" >").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p id=\"edit-experience\" class=\"editable\" >").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p id=\"edit-skills\" class=\"editable\" >").concat(skills, "</p>\n\n    ");
        var rersumeOutputElement = document.getElementById('resumeOutput');
        if (rersumeOutputElement) {
            rersumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error("One or more resume elements are missing.!");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElemet = element;
            var currentValue = currentElemet.textContent || "";
            if (currentElemet.tagName === "P" || currentElemet.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElemet.textContent = input_1.value;
                    currentElemet.style.display = 'inline';
                    input_1.remove();
                });
                currentElemet.style.display = 'none';
                (_a = currentElemet.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElemet);
                input_1.focus();
            }
        });
    });
}
;
