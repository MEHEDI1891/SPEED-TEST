const quotes = [
    { text: "Sometimes you want to give up the guitar, you'll hate the guitar. But if you stick with it, you're gonna be rewarded.", author: "Jimi Hendrix" },
    { text: "The guitar is your first wings. It's assigned and designed to unfold your vision and imagination.", author: "Carlos Santana" },
    { text: "I just want to play the guitar and make people feel good.", author: "B.B. King" },
    { text: "Nothing is more beautiful than a guitar, save perhaps two.", author: "Frederic Chopin" },
    { text: "Guitar playing is just something that came to me and is really second nature now.", author: "Dave Mustaine" }
];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const btn = document.getElementById("new-quote-btn");

btn.addEventListener("click", () => {
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Update the DOM elements
    quoteText.textContent = `"${quotes[randomIndex].text}"`;
    quoteAuthor.textContent = `- ${quotes[randomIndex].author}`;
});
