#!/usr/bin/env node

require("dotenv").config();
const sendEmail = require("./services/sendEmail");
const fs = require("fs");
const commander = require("commander");

// create program object using Commander.js
const program = new commander.Command();

// define command-line options and arguments
program

  .option("-t, --to <to>", "recipient email address")
  .arguments("<files...>")
  .on("--help", () => {
    console.log("");
    console.log("Examples:");
    console.log(
      "  $ sendfiles -t recipient_email@gmail.com file1.txt file2.txt file3.txt"
    );
    console.log("");
  });

// parse command-line arguments
program.parse(process.argv);
if (!program._optionValues.to) {
  console.error("Error: Please provide  the recipient email address.");
  process.exit(1);
}
// create an array to hold the file contents
let fileContents = [];

// loop over command-line arguments and read each file
for (let i = 0; i < program.args.length; i++) {
 
  const fileName = program.args[i];
  const fileContent = fs.readFileSync(fileName);
  fileContents.push({
    filename: fileName,
    content: fileContent,
  });
}

//to send email

sendEmail({
  email: program._optionValues.to,
  subject: "Files sent through sendFile ",
  message: "This is the file sent through sendFile npm package ",
  attachements: fileContents,
})
  .then((res) => {
    console.log("Successfully sended files");
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

