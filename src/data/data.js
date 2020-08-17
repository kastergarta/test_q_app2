export default [
    {
        question: 'Which element is used for a top-level heading?',
        answers: ['div', 'h0', 'h1', 'p'],
        correct: 3
    },

    {
        question: 'Which element is used for a page break?',
        answers: ['div', 'br', 'break', 'p'],
        correct: 2
    },    
    {
        question: 'Which markup makes a link?',
        answers: [
            "<href a='/cats' />",
            "<a src='/cats' />",
            "<link href='/cats' />",
            "<a href='/cats' />"
          ],
        correct: 4
    },    
    {
        question: 'Which markup correctly creates an image?',
        answers: ["<img src='cat.jpg' />", "<src img='cat.jpg' />", '<img>cat.jpg</img>', '<src>cat.jpg</img>'],
        correct: 4
    }
]