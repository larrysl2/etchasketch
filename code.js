const button = document.querySelector(".button");
button.addEventListener("click", adddivs);
let p =0;
function adddivs () 
{
    // parameters are function squaresize and prompt which will get user input and ss will calculate square sizes
 // create a new div element
    let x=0;
    
    do
    {
    let numsquares = parseInt(prompt("Enter number of squares on side of board with whole number less than 100"));
    if (numsquares<101 && Number.isInteger(numsquares)==true)
    {
    x=1;
    p = numsquares;
    }
    }while(x!=1);
    
    console.log(p);
    let squaresizes = squaresize(); //store return values in variables
	console.log(squaresizes);
    for(i=0;i<p;i++)//loop through number of sq on side divs
    {
        
        let divcontainer = document.createElement("div");//create a variable divcontain and create/store a div in it
        divcontainer.classList.add("divcontainer"+i);//add class divcontainer to this div
        divcontainer.style.display ='inline-flex'; //make small divs flex to take up entire width
        divcontainer.style.borderStyle="solid";
        divcontainer.style.width="100%";
        divcontainer.style.height=1/p*100+'%';
        const theboard = document.getElementById("board"); //get board
        theboard.appendChild(divcontainer); //add container to board

        for(j=0;j<p;j++) // loop through number of squares needed to create
        {
        
            let smalldivs = document.createElement("div"); //create div and call smalldivs
            smalldivs.classList.add("smalldivs"); //create div and store in smalldivs
            smalldivs.style.width = squaresizes/960*100+'%'; //set width to sss
            smalldivs.style.height = '100%'; //set height to ss
            smalldivs.style.display ='Inline-Flex'; //set to inline flex so can stay in a row
            smalldivs.style.borderStyle="solid";
            const container = document.getElementsByClassName("divcontainer"+i); 
            container[0].appendChild(smalldivs); //append divs to collection //add ss to container
            
        }
    }
 }

function squaresize()
{
	let hxw = 960/p;
	return hxw;
}