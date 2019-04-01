// eslint-disable-next-line
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const checkInvalidEmails = (emails) => {
  // clean up and store emails in array
  const invalidEmails = emails
    // split on comma
    .split(',')
    // trim trailing and leading whitespace
    .map((email) => email.trim())
    // filter to return invalid emails
    .filter((email) => !emailRegex.test(email) && email !== '');
  // return error message based on invalidEmails
  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return;
};
