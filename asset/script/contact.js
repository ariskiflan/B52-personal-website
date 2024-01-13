function submitData(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("number").value;
  const subject = document.getElementById("select").value;
  const message = document.getElementById("textarea").value;

  if (
    name == "" ||
    email == "" ||
    phoneNumber == "" ||
    subject == "" ||
    message == ""
  ) {
    return alert("input field ada yang belum terisi!");
  }

  console.log(name);
  console.log(email);
  console.log(phoneNumber);
  console.log(subject);
  console.log(message);

  let a = document.createElement("a");
  a.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(
    `${message}, nama saya ${name}, kontak saya di ${email}`
  )}`;
  a.click();
}
