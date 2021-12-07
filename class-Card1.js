class Card{
    suit=String;
    value= String;
    //position= Number;
    numValue=Number;

    displayInfo(){
        console.log("This is: "+this.value+" "+this.suit);
    }
}

let deck = new Array();
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var numValue=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];
var playerdeck = new Array();
var cardsDiscarded = new Array();

function moveCardToPlayer(cardName)
{
	var suit = cardName.split("-")[0];
	var value = cardName.split("-")[1];
	
	for(let d= 0; d < deck.length; d++)
	{
		if (deck[d].suit == suit && deck[d].value == value)
		{
			playerdeck.push(deck[d].numValue);
			console.log(playerdeck[playerdeck.length-1]);
			
			for(let nv=  0; nv < numValue.length; nv++)
			{
				if (numValue[nv] == deck[d].numValue)
				{
					numValue[nv] = 0;
				}				
			}
			
			
		}
	}
}

function shuffle()
{
	/*var m = this.deck.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            deck[m] = deck[i];
            deck[i] = t;
        }*/
		
	var m = numValue.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = numValue[m];
            numValue[m] = numValue[i];
            numValue[i] = t;
        }
}


function getCardFromTop()
{	
	playerdeck.push(numValue[numValue.length - 1]);
	numValue.pop();
}

function resetCards()
{
	numValue=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];
	playerdeck = new Array();
	cardsDiscarded = new Array();
}



function checkMyCard(cardNumb)
{
	for(let d= 0; d < playerdeck.length; d++)
	{
		if (deck[d].numValue == cardNumb)
		{
			console.log(deck[d].displayInfo());
		}
	}
}


function discardCard(cardNumb)//13
{
	for(let pd= 0; pd < playerdeck.length; pd++)
	{
		if (playerdeck[pd] == cardNumb)
		{
			cardsDiscarded.push(playerdeck[pd]);
			playerdeck.splice(pd, 1);
		}
	}
}


function makedeck(){

	var card = new Card();
	var num = 1;
    for(let s= 0; s < suits.length; s++)
        {
        for(let v = 0; v < values.length; v++)
        {   
			card= new Card();
			
			card.value = values[v];
            card.suit = suits[s];
			card.numValue = num;
			num++;
            

			if (suits[s] == "spades" || suits[s] == "diamonds")
			{
				card.color = "black";
			}
			else
			{
				card.color = "red";
			}

            deck.push(card);
            console.log(deck[deck.length-1])
        }
    }
    return deck
};

makedeck();
shuffle();

getCardFromTop();
