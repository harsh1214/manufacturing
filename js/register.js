var rejectList = ["gmail.com", "ymail.com", "rocketmail.com","yahoo.com","outlook.com", "myyahoo.com", "hotmail.com"];

function validateEmailField(){
    var emailValue = $('#email').val(); // To Get Value (can use getElementById)
    var splitArray = emailValue.split('@'); // To Get Array
    if(rejectList.indexOf(splitArray[1]) >= 0){
        // $('#input-sub-container-email').css("border-radius", "5px 5px 0 0");
        // $('#email-error').removeClass('d-none');
        // $('#email-error').text('Please Enter Only Official Email-ID');
        return false;
    }
        // $('#input-sub-container-email').css("border-radius", "5px");
        // $('#email-error').addClass('d-none');
        return true;
}

$.validator.addMethod('validateEmail', () => {
    var emailValue = $('#email').val(); // To Get Value (can use getElementById)
    var splitArray = emailValue.split('@'); // To Get Array
    if(rejectList.indexOf(splitArray[1]) >= 0){
        // $('#input-sub-container-email').css("border-radius", "5px 5px 0 0");
        // $('#email-error').removeClass('d-none');
        // $('#email-error').text('Please Enter Only Official Email-ID');
        return false;
    }
        // $('#input-sub-container-email').css("border-radius", "5px");
        // $('#email-error').addClass('d-none');
        return true;
});

// $("#form").submit((event) => {
//     var recaptcha = $("#g-recaptcha-response").val();
//     if (recaptcha === "") {
//         event.preventDefault();
//         alert("Please check the recaptcha");
//     }
//     if(validateEmailField()){
//         $('#input-sub-container-email').css("border-radius", "5px");
//         $('#email-error').addClass('d-none');
//         return true;
//     }
//     else{
//         $('#input-sub-container-email').css("border-radius", "5px 5px 0 0");
//         $('#email-error').removeClass('d-none');
//         $('#email-error').text('Please Enter Only Official Email-ID');
//         event.preventDefault();
//     }
// });

// Form
// Wait for the DOM to be ready
$(function () {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("#form").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            firstName: {
                required: true,
            },
            lastName: {
                required: true,
            },
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true,
                validateEmail: true
            },
            mobileNumber: {
                required: true,
                // phoneUs: true
            },
            awardsNomination: {
                required: true,
                // phoneUs: true
            },
            designation: {
                required: true,
            },
            companyName: {
                required: true,
            },
            companySize: {
                required: true,
            },
            sponsorTypeOther: {
                required: true,
            },
            address: {
                required: true,
            },
        },
        // Specify validation error messages
        messages: {
            firstName: "Please enter your First Name",
            lastName: "Please enter your Last Name",
            email: { 
                required: "Please enter a valid email address",
                validateEmail: "Please enter a official email address",
        },
            awardsNomination: "Please select a Award",
            mobileNumber: "Please enter a valid Mobile Number",
            designation: "Please enter your Designation",
            companyName: "Please enter your Company Name",
            companySize: "Please select your Employees Size",
            sponsorTypeOther: "Please Mention Type of Sponsor",
            address: "Please enter your Address",
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            form.submit();
        }
    });
});

const inquiryType = document.getElementById('inquiryType');
const inquiryTypeContainer = document.getElementById('sponsorTypeContainer');
const sponsorType = document.getElementById('sponsorType');
const sponsorTypeOther = document.getElementById('sponsorTypeOther');
const sponsorTypeContainerOther = document.getElementById('sponsorTypeContainerOther');
var sponsorTypeValue = '';
inquiryTypeContainer.style.display = 'none';
sponsorTypeContainerOther.style.display = 'none';

inquiryType.addEventListener('change', (e) => {
    console.log(e.target.value);
    inquiryTypeValue = e.target.value;
    if(inquiryTypeValue == 'Sponsor'){
        inquiryTypeContainer.style.display = 'flex';
        if(sponsorTypeValue == 'Other'){
            sponsorTypeContainerOther.style.display = 'flex';
            sponsorTypeOther.removeAttribute("disabled");
        }
    } else {
        inquiryTypeContainer.style.display = 'none';
        sponsorTypeContainerOther.style.display = 'none';
    }
});

sponsorType.addEventListener('change', (e) => {
    console.log(e.target.value);
    sponsorTypeValue = e.target.value;
    if(sponsorTypeValue == 'Other'){
        sponsorTypeContainerOther.style.display = 'flex';
        sponsorTypeOther.removeAttribute("disabled");
    } else {
        sponsorTypeContainerOther.style.display = 'none';
        sponsorTypeOther.setAttribute("disabled", "");
    }
});