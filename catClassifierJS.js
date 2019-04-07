let net;
let imageToParse;

function setup()
{
    imageinput = createInput("https://i.imgur.com/dGhA9q5.png");
    imageinput.position(2,2);
    goButton = createButton("Do it");
    goButton.position = (0, 0);
    goButton.mousePressed(app);
    imageToParse = imageinput.value();
}

  //build output textbox in html
  var textout = document.createElement("INPUT");
  textout.setAttribute("type", "text");
  textout.setAttribute("style", "width: 420px;");
  document.body.appendChild(textout); 


  
async function app() 
{   
  imageToParse = imageinput.value();
  document.getElementById("img").src = imageToParse;
  console.log('Doin that funky tensor bizness...');
  textout.setAttribute("value", "loading...");
  net = await mobilenet.load();
  const img2classify = document.getElementById('img');  
  const result = await net.classify(img2classify);
  var text1 = result[0].className.toString();
  var text2 = result[1].className.toString();
  var text3 = result[2].className.toString();
  var womboout = [text1, text2, text3];
  womboout.join("- ")
  console.table(womboout);  
  textout.setAttribute("value", womboout);   
}
