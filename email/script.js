function sendEmail() {
  var nameValue = document.getElementById('name').value;
  var emailValue = document.getElementById('email').value;
  var messageValue = document.getElementById('message').value;

  // Check if any of the fields are empty
  if (!nameValue || !emailValue || !messageValue) {
      alert('Zəhmət olmasa bütün xanaları doldurun');
      return;
  }

  var templateParams = {
      from_name: nameValue,
      email_id: emailValue,
      message: messageValue
  };
      emailjs.send('service_e1x621r', 'template_wopcrlh', templateParams).then(
        (response) => {
          alert('SUCCESS!', response.status, response.text);
        },
        (error) => {
            alert('FAILED...', error);
        },
      );
}


// function sendEmail() {
//     var templateParams = {
//         // to_email: 'info@smeinc.az',
//         from_name: document.getElementById('name').value,
//         email_id: document.getElementById('email').value,
//         message: document.getElementById('message').value
//     };
//     console.log(templateParams)
//     emailjs.send("service_e1x621r","template_wopcrlh",{
//     from_name: "asddas",
//     email_id: "asdads",
//     message: "asdadsdsa",
//     }).then(
//         (response) => {
//           alert('SUCCESS!', response.status, response.text);
//         },
//         (error) => {
//           alert('FAILED...', error);
//         },
//       );

//     }

        // emailjs.send('service_fkij1sh', 'template_wopcrlh', templateParams).then(
    //   (response) => {
    //     alert('SUCCESS!', response.status, response.text);
    //   },
    //   (error) => {
    //     alert('FAILED...', error);
    //   },
    // );


    // var templateParams = {
    //     from_name: "John Doe",
    //     email_id: "john@example.com",
    //     message: "Test message content"
    // };
    // console.log(templateParams);

    // // Use the dynamic templateParams for sending the email
    // emailjs.send("service_e1x621r", "template_wopcrlh", templateParams).then(
    //     (response) => {
    //         alert('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //         alert('FAILED...', error);
    //     },
    // );