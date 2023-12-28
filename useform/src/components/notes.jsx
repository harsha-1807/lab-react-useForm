// npm install react-hook-form

// const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     formState: { errors },
// } = useForm()

//^ register: This variable likely holds a function that is used to register form inputs. It allows you to register your input elements and specify validation rules if needed.

{/* <input type="text" name='firstName' {...register("firstName", {
    required: true, minLength: 7
})} /> */}

//^ with some custom message
{/* <input type="text" name='firstName' {...register("firstName", {
    required: "Enter The First Name", minLength: {
        value: 7,
        message: "Minimum Length Should Be 7 Chars "
    }
})} /> */}

{/* <input type="text" name="lastName"
    {...register("lastName", {
        required: true,
        maxLength: { value: 8, message: "Max 8 Chars" },
        minLength: { value: 2, message: "Min 2 Chars" }
    })}
/> */}

//^ watch: This variable probably holds a function that allows you to watch the value of form inputs. You can use it to get the current value of a particular input field or to watch changes on specific fields.

// const firstNameValue = watch("firstName");
// const lastNameValue = watch("lastName");
// const emailValue = watch("email");

//const allFormValues = watch(); // Watches all fields in the form

// const watchedValues = watch(["firstName", "lastName", "email"]); // Watches multiple fields




//^ reset: This variable likely contains a function that resets the form fields to their initial values or clears the form's errors.

// reset(); // Resets all fields in the form to their initial state
// reset({
//     firstName: 'DefaultFirstName',
//     lastName: 'DefaultLastName',
//     email: 'default@example.com',
//     // Set default values for other fields as needed
//   });


//^ formState: { errors } => This destructuring syntax is used to access the errors object within the formState object. The formState object could contain various properties related to the form's state, and here, specifically, errors likely holds validation error messages for form fields.


// error = {
//     fieldName1: {
//         type: 'validationType',
//         message: 'Error message for field 1',
//     },
//     fieldName2: {
//         type: 'validationType',
//         message: 'Error message for field 2',
//     },
// }



// const {
//     formState: { errors, isDirty, isSubmitting, isValid ,isSubmitSuccessful ,isSubmitted},
//   } = useForm();

//   // Checking if the form has any validation errors
//   if (!isValid) {
//     // Handle form submission when form is invalid
//   }

//   // Checking if the form is currently being submitted
//   if (isSubmitting) {
//     // Display a loading spinner or message
//   }

//   // Accessing specific error messages for form fields
//   console.log(errors.firstName); // Error message for 'firstName' field
//   console.log(errors.lastName); // Error message for 'lastName' field

//   // Checking if the form has been modified
//   if (isDirty) {
//     // Form has been modified, perform necessary actions
//   }

// isSubmitSuccessful is used to conditionally render the success message. When the form is submitted successfully and passes all validations, the success message will be displayed.

// isSubmitted is available to track whether the form has been submitted at least once, regardless of whether the submission was successful or not. You can use it to show different content or behavior after the form is initially submitted.

//^ DEFAULT INPUTS

// const { register, handleSubmit, formState: { errors }, reset } = useForm({
//     defaultValues: {
//         firstName: 'Aman', // Default value for firstName
//         lastName: 'Raj',   // Default value for lastName
//         email: 'aman@gmail.com',         // Default value for email (empty string in this case)
//         // Add default values for other form fields here
//     }
// });





//* const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

//\ ^: Denotes the start of the string.

// [A-Z0-9._%+-]+: Matches one or more characters that can be any uppercase letter (A-Z), digit (0-9), or specific characters like dot (.), underscore (_), percent (%), plus (+), or hyphen (-). This part before @ represents the local part of the email address.

// @: Matches the literal @ symbol, which separates the local part from the domain part of the email address.

// [A-Z0-9.-]+: Matches one or more characters that can be any uppercase letter (A-Z), digit (0-9), dot (.), or hyphen (-). This part represents the domain name (before the top-level domain).

// \.: Matches the literal dot (.). It is escaped with a backslash \ because in regex, a dot . by itself represents any character.

// [A-Z]{2,}: Matches two or more uppercase letters (A-Z). This part represents the top-level domain (like .com, .org, .net). You can modify {2,} to specify the minimum length of the top-level domain.

// /i: This is the flag at the end of the regex pattern and stands for "case insensitive." It makes the regular expression match uppercase and lowercase letters without considering their case.

//* const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/;

//\   ^: Denotes the start of the string.

// (?=.*\d): Requires at least one digit.

// (?=.*[a-z]): Requires at least one lowercase letter.

// (?=.*[A-Z]): Requires at least one uppercase letter.

// (?=.*[!@#$%^&*()\-_=+{};:,<.>]): Requires at least one special character. You can adjust the characters within the square brackets to include your desired special characters.

// (?=.*[a-zA-Z]): Requires at least one letter (either uppercase or lowercase).

// .{8,}: Requires a minimum length of 8 characters. You can modify the {8,} part to specify your desired minimum password length.

