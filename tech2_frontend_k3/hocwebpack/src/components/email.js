import emailTemplate from "../templates/email.html";

export const sendEmail = (email, name, invoice) => {
  let template = emailTemplate
    .replace("{name}", name)
    .replace("{invoice_number}", invoice);
  console.log(template);
};
