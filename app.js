const express = require('express');
const app = express();

let HTML ="";

for(let i=1; i<=50; i++){
	if(i%2 === 0){
		HTML+= '<p>'+i+' Soy Par!</p>';
	}else{
		HTML+= '<p>'+i+' Soy Impar!</p>';
	}
	
}

app.get('/', (req, res) => {		
  
  	res.send(HTML);  
});

app.listen(3000, () => console.log('Listening on port 3000!'));