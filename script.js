
const setOfWords = [
    "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java was first released in 1995 and is widely used for developing applications for desktop, web, and mobile devices. Java is known for its simplicity, robustness, and security features, making it a popular choice for enterprise-level applications",
    "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.",
    "JAVA was developed by James Gosling at Sun Microsystems Inc in the year 1995, later acquired by Oracle Corporation. It is a simple programming language. Java makes writing, compiling, and debugging programming easy. It helps to create reusable code and modular programs. Java is a class-based, object-oriented programming language and is designed to have as few implementation dependencies as possible. A general-purpose programming language made for developers to write once run anywhere that is compiled Java code can run on all platforms that support Java. Java applications are compiled to byte code that can run on any Java Virtual Machine. The syntax of Java is similar to c/c++.",
    "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.",
    "C is a high-level and general-purpose programming language that is ideal for developing firmware or portable applications. Originally intended for writing system software, C was developed at Bell Labs by Dennis Ritchie for the Unix Operating System in the early 1970s.",


];

var msg = document.getElementById("msg");
var typeWord = document.getElementById("typeWord");
var btn = document.getElementById("btn");
var startTime, endTime;


function gameStart() {
    var randomNo = Math.floor(Math.random() * setOfWords.length);
    msg.innerHTML = setOfWords[randomNo];
    let date = new Date;
    startTime = date.getTime();
}

function gameEnd() {
    let date = new Date;
    endTime = date.getTime();

    var totalTime = (endTime - startTime) / 1000;

    let totalStr = typeWord.value;
    let noOfWords = wordCount(totalStr);

    let speed = Math.round((noOfWords / totalTime) * 60);
    var message = "You typed total " + speed + " Words per Minutes."

    let message1 = checkWord(totalStr, msg.innerHTML);
    msg.innerHTML = message + message1;


}

function wordCount(totalStr) {
    var noOfWords = totalStr.split(" ").length;
    return noOfWords;
}

function checkWord(str1, str2) {
    let typeWord = str1.split(" ");
    let msgWord = str2.split(" ");
    let wrightWords = 0;

    // msg.forEach(items,index => {    });
    msgWord.forEach(function (items, index) {
        if (items == typeWord[index]) {
            wrightWords++;
        }
    })

    let errorWords = (msgWord.length - wrightWords);

    return (wrightWords + " correct out of " + msgWord.length + " words and the total Error are " + errorWords + ".")

}

//adding event on button
btn.addEventListener("click", function () {


    if (this.innerText == 'Start') {
        typeWord.value = "";
        typeWord.disabled = false;
        btn.innerHTML = "Done";
        gameStart();
    }
    else if (this.innerText == "Done") {
        typeWord.disabled = true;
        btn.innerText = "Start";

        gameEnd();
    }
});