function sayHello(name,age){
	document.write("you are "+name+ " of age "+ age+"<br>");
	result = concatenate(name,age)
	document.write(result)
  }
  
  
 function concatenate(name,age){
	result = name+age
	return result;
 }
 
