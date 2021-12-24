
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n') {
    quit();
  }
  if (text === 'exit\n') {
    quit();
  }
  if (text === 'help\n') {
    help();
  }
  if (text === 'hello\n') {
    hello();
  }
  if(text.trim().slice(0,5) === 'hello'){
    Hello(text.slice(5));
  }
  else{
    unknownCommand(text);
    console.log(text);
  }
  if (text === 'list\n') {
    list();
  }
 if(text.trim().split(" ")[0] === 'add'){
    add(text);
  }
  if (text === 'array\n') {
    array();

}
else if(text.slice(0,5) === 'hello'){
  HELLO(text.slice(5));
}
else if(text === 'array\n'){
  arraylist();
}

else{
  unknownCommand(text);


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */

function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}
 
/**
 * Says hello

 * 
 * @returns {void}
 */
function hello(){
  console.log('hello!')
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.quit();
}
function exit(){
  console.log('exit now, goodbye!')
  process.quit();
}
/**
 * list of command
 *
 *
 * @returns {void}
 */

//array 
console.log(('hello ' + n +"!"))

}
//array
let list=["blue","orange","red","yellow"]
function arraylist(){
  for(i=0;i<=list.length-1;i++){
    console.log(list[i])
  }
}
function add(text){

  let addMessage=text.slice(4);
  if(addMessage.length > 0){
  tasks.push(addMessage.trim());
  console.log(addMessage);

  }else{

    console.log('Error you need to add a task')
   

  }
}
//help
function help(){
  console.log('option:\n -quite: exit the application\n -exit: exit the application \n -hello: greeting you for example if you enter hello assia the answer is hello assi')
}
function Hello(name){
  let n = name.trim();
  console.log('hello'+" "+n+"!")
}
//array

let tasks = ['orange','red','blue','green']
function list(){
  tasks.forEach((element,index) => {
    console.log(${index}-${tasks[index]})
  });

}
//arrayadd
function add(text){

  let n=text.slice(4);
  if(n.length > 0){
  tasks.push(n.trim());
  console.log(n);

  }else{

    console.log('you need to add a value')


  }
}


//delete last elem
//function last(){
  //tasks.pop();
  //onsole.log(tasks);

//remove second elem

//function second(){
 
    //tasks.splice(1,1) ;


//remove first element
//function first(){
  //tasks.shift() ;
   //console.log(tasks);
}
// The following line starts the application
startApp("Assia ahmad")
