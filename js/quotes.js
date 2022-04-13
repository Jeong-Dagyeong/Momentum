const quotes = [
    {
        quote : "Life is a journey to be experienced, not a problem to be solved.",
        author : "Winne the Pooh"
    },
    {
        quote : "Remember you’re the one who can fill the world with sunshine.",
        author : "Snow White"
    },
    {
        quote : "A true hero isn’t measured by the size of his strength, but by the strength of his heart.",
        author : "Hercules"
    },
    {
        quote : "Every day, every minute, every second, you have a chance to change your life.",
        author : "Dumbo"
    },
    {
        quote : "There is no one who can’t fall. However, only those who get up again will learn how to move forward.",
        author : "Bambi"
    },
    {
        quote : "Magic can happen only when you have an earnest desire.",
        author : "Cinderella"
    },
    {
        quote : "You still have enough time to make your dreams come true!",
        author : "Peter Pan"
    },
    {
        quote : "You can’t always succeed just because you try, but be aware that successful people are who’s tried a lot and put a lot of effort into their goals.",
        author : "Winne the Pooh"
    },
    {
        quote : "If you really want to have something, you can get it but you have to try, try and try again. Then you can finally get it.",
        author : "The Little Mermaid"
    },
    {
        quote : "I don’t care about the past. Even if it hurts. Here you only need to choose one. Either run away or overcome.",
        author : "Lion King" 
    },
    {
        quote : "Don’t close your eyes and look straight ahead. The reality of fear can be different from what you think.",
        author : "Finding Nemo"
    },
    {
        quote : " The flower that bloom after overcoming adversity are the most beautiful flower.",
        author : "Mulan"
    }
]

const quote = document.querySelector("#quote span:nth-child(1)");
const author = document.querySelector("#quote span:nth-child(2)");

// console.log(quotes[12-1]);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;