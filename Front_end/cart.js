const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const addressInput = document.getElementById('address');
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit');
const commentForm = document.getElementById('comment-form');

const custObj = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
}

console.log(submitButton);
submitButton.addEventListener('click', ($event) => {
 $event.preventDefault();
console.log(custObj);
commentForm.reset();
})

// submitButton.addEventListener('click', test );
// function test($event){
//     console.log('event',$event);
//     $event.preventDefault();
//     commentForm.reset();
// }

firstNameInput.addEventListener('input', ($event) => {
    if ($event.target.value.length >0){
    custObj.firstName = $event.target.value;
    submitButton.removeAttribute('disabled');
    } else{
        submitButton.setAttribute('disabled', 'true');
    }
});

lastNameInput.addEventListener('input', ($event) => {
    if ($event.target.value.length >5){
        console.log($event.target.value.length);
    custObj.lastName = $event.target.value;
    submitButton.removeAttribute('disabled');
    } else{
        submitButton.setAttribute('disabled', 'true');
    }
});

// addressInput.addEventListener('input', ($event) => {
//     if ($event.target.value.length >=1){
//     submitButton.removeAttribute('disabled');
//     } else{
//         submitButton.setAttribute('disabled', 'true');
//     }
// });

// emailInput.addEventListener('input', ($event) => {
//     if ($event.target.value.length >=1){
//     submitButton.removeAttribute('disabled');
//     } else{
//         submitButton.setAttribute('disabled', 'true');
//     }
// });