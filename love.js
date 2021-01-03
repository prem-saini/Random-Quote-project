# Random-Quote-project
// get all Quotes
const quotes =  [
{
    quote:    
        "Be yourself everyone else is already taken.",
    author: "Oscar Wilde" 
},
{ 
    quote:    
        "So many books so little time.",
    author: "Frank Zappa"
 },
 {
    quote:
        'A room without books is like a body without a soul.',
    author: "Marcus Tullius Cicero."
},
{
    quote:
        "You only live once but if you do it right once is enough.",
    author: "Mae West"
},
{
    quote:
        "If you tell the truth you don't have to remember anything.",
    author: "Mark Twain"
}
];

const btn = document.querySelector('.generate');

btn.addEventListener('click', () => {

    let random = Math.floor(Math.random() * quotes.length);
    
    document.querySelector('.quote').innerText = quotes[random].quote;
    
    document.querySelector('.author').innerText = quotes[random].author;
});
