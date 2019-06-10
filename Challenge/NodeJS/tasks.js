
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
var listTasks = ["hello", "quit", "help", "unknownCommand"];
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
  text= text.replace('\n', "").trim();
   var arrText = text.split(" ");
  console.log(arrText);
  if (arrText[0] === 'quit' || arrText[0] === 'exit') {
    quit();
  }

  else if(arrText[0] === 'hello'){
    hello(arrText[1]);
  }


  else if (arrText[0] === 'help'){
    help();
  }
  else if(arrText[0] === 'list'){
    list();
  }
  else{
    unknownCommand(text);
  }
  
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: '+c)
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(arrText){
  if (arrText === undefined) {
    console.log("hello!")
  }else {
    console.log("hello" + " " + arrText+ "!")
  }}
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}


/**
 * help function lists all the possible commands:
 */
function help (){
console.log ("hello\n", "quit\n", "help\n", "hello with another word + !");

}

/*list */

function list() {
  for (var i = 0; i<listTasks.length; i++){
    console.log((i + 1) + ":" + " " + listTasks[i]);
  }
}

// The following line starts the application
startApp("Salam")
