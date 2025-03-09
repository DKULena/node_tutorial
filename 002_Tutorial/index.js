// const fs = require('fs');
const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
      console.log(data);
      await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'), data)

      await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)
      await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you')
      await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'))
      const newData = await fsPromises.readFile(
        path.join(__dirname, "files", "promiseComplete.txt"),
        "utf8"
      );
        console.log(newData);
  } catch (error) {
    console.error(error);
  }
};

fileOps();

// fs.readFile('./files/hello.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

// 비동기임
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
//     if (err) throw err;
//     console.log('write complete')

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n Yes it is.', (err) => {
//         if (err) throw err;
//         console.log('Append complete')

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename complete')
//         })
//     })
// })

// console.log('Hello....')

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`그런건 없다 임마: ${err}`);
  process.exit(1);
});
