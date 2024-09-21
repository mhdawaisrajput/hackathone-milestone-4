document.getElementById(`resumeForm`)?.addEventListener(`submit`, function(event){
    event.preventDefault();
    
    const profileImageInput = document.getElementById('profileimage') as HTMLInputElement;

    const nameElement = document.getElementById(`name`) as HTMLInputElement
    const emailElement = document.getElementById(`email`) as HTMLInputElement
    const phoneElement = document.getElementById(`phone`) as HTMLInputElement
    const educationElement = document.getElementById(`education`) as HTMLTextAreaElement
    const experienceElement = document.getElementById(`experience`) as HTMLTextAreaElement
    const skillsElement = document.getElementById(`skills`) as HTMLTextAreaElement

    if (profileImageInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        const profileImageFile= profileImageInput.files?.[0];
        const profileimageURL = profileImageFile? URL.createObjectURL(profileImageFile) : '';
    

    const resumeOutput = `
    <h2>Resume</h2>

    ${profileimageURL ? `<img src="${profileimageURL}" alt="Profile Image" class="profileimage" ` : "" };

    <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span> </p>
    <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
    <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable"> ${phone} </span> </p>
    
    <h3>Education</h3>
    <p id="edit-education" class="editable" >${education}</p>

    <h3>Experience</h3>
    <p id="edit-experience" class="editable" >${experience}</p>

    <h3>Skills</h3>
    <p id="edit-skills" class="editable" >${skills}</p>

    `;

    const rersumeOutputElement = document.getElementById('resumeOutput')
    if (rersumeOutputElement){
        rersumeOutputElement.innerHTML = resumeOutput;

        makeEditable();

    }   
} else { 
    console.error(`One or more resume elements are missing.!`)
}
});

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function() {
            const currentElemet = element as HTMLElement
            const currentValue = currentElemet.textContent || "";

            if(currentElemet.tagName === "P" || currentElemet.tagName === 'SPAN') {
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue;
                input.classList.add('editing-input')

                input.addEventListener('blur', function(){
                    currentElemet.textContent = input.value;
                    currentElemet.style.display = 'inline'
                    input.remove()
                })
                
                
                currentElemet.style.display = 'none'
                currentElemet.parentNode?.insertBefore(input, currentElemet)
                input.focus()
            }

        })
    })
};