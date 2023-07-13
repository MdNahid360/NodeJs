//FILE SYSTEM MODULE

//write file
fs.writeFileSync('my-file.txt', 'hello world')
// add data into file
fs.appendFileSync('my-file.txt', 'hello world, this is my text file')

//synchronously write file
 const data = fs.readFileSync('my-file.txt')
console.log(data.toString());


//asynchronously write file
fs.readFile('my-file.txt', (err, data) => {
    console.log('asyncronous data :::::: ' + data.toString());
})

console.log('hello js');