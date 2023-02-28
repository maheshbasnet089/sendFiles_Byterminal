# sendFiles

sendFiles is the command line tool made on node js which can solve the problem of sending files when you don't have access to gmail on the system.

Suppose you are in public place using some computer and after doing some task work on that computer , you may want to share your done work , so sendFiles can be useful in this scenario. You don't have to login your gmail account in that public computer,sendFiles will help you send those done task files to your desired gmail in a moment of second.

## Installation

```node
npm install -g sendfiles
```

## Examples

In order to send files to receipient x@gmail.com

```node
sendfiles -t x@gmail.com file1.pdf file2.pdf
```

sendFiles command can also be used in place of sendfiles.You can send folder too

```node
sendfiles -t x@gmail.com folder1.zip
```

## Know More

```node
sendfiles --help
```

## Features

- Send your files in a mean time
- No burden of loggin in your credentials in computer
- faster than usual mail sending process

## Support

For support, email basnetmanish089@gmail.com ,pull requests are welcomed in the github

## License

[MIT](https://choosealicense.com/licenses/mit/)
