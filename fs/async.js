// when fs async methods are invoked, node puts it in a queue and runs it when resources are free from other website activities
// requires callback functions, which executes when the async methods is done exeuting and helps throw error if encountered any

const {readFile, writeFile} = require('fs')
readFile('./content/first.txt', (err, result)=>{
	if(err){
		console.log(err)
		return
	}
	console.log(result) // prints buffer
})

// provide ut8 encoding to print as string
readFile('./content/first.txt','utf8', (err, result)=>{
	if(err){
		console.log(err)
		return
	}
	console.log(result)
})

// appending second.txt to first.txt
readFile('./content/first.txt','utf8', (err, result)=>{
	if(err){
		console.log(err)
		return
	}
	const first = result;
	readFile('./content/second.txt','utf8',(err,result)=>{
		if(err){
			console.log(err)
			return
		}
		const second = result;
		writeFile(
			'./content/result.txt',
			`Here is the result : ${first}, ${second}`,
			(err, result)=>{
				if(err){
					console.log(err)
					return
				}
				console.log(result)
			}
		)
	})
})