let quotes = [
  {
    quote: `"Time is money"`,
    author: `Benjamin Franklin`,
  },
  {
    quote: `"Time waits for no one"`,
    author: `Unknown author`,
  },
  {
    quote: `"Time is the wisest counselor of all"`,
    author: `Pericles`,
  },
  {
    quote: `"Punctuality is the thief of time"`,
    author: `Oscar Wilde, The Picture of Dorian Gray`,
  },
  {
    quote: `"The key is in not spending time, but in investing it"`,
    author: `Stephen R. Covey`,
  },
  {
    quote: `"It is the time you have wasted for your rose that makes your rose so important"`,
    author: `Antoine de Saint-Exupéry, The Little Prince.`,
  },
  {
    quote: `"Time is the most valuable thing a man can spend"`,
    author: `Theophrastus`,
  },
  {
    quote: `"Better three hours too soon than a minute too late"`,
    author: `William Shakespeare`,
  },
  {
    quote: `"Never leave till tomorrow that which you can do today"`,
    author: `Benjamin Franklin`,
  },
  {
    quote: `"The two most powerful warriors are patience and time"`,
    author: `Leo Tolstoy`,
  },
  {
    quote: `"Your time is limited, so don't waste it living someone else's life."`,
    author: `Steve Jobs`,
  },
  {
    quote: `"Life, if well lived, is long enough"`,
    author: `Seneca`,
  },
  {
    quote: `"For the Present is the point at which time touches eternity"`,
    author: `C.S. Lewis`,
  },
  {
    quote: `"A man who dares to waste one hour of life has not discovered the value of life"`,
    author: `Charles Darwin`,
  },
  {
    quote: `"Tough times never last, but tough people do"`,
    author: `Robert H. Schuller`,
  },
  {
    quote: `"Time is more valuable than money. You can get more money, but you cannot get more time"`,
    author: `Jim Rohn`,
  },
  {
    quote: `"I never think of the future. It comes soon enough"`,
    author: `Albert Einstein`,
  },
  {
    quote: `"Time and the hour run through the roughest day"`,
    author: `William Shakespeare`,
  },
  {
    quote: `"The trouble is, you think you have time"`,
    author: `Jack Kornfield`,
  },
  {
    quote: `"The common man is not concerned about the passage of time, the man of talent is driven by it"`,
    author: `Arthur Schopenhauer`,
  },
  {
    quote: `"They always say time changes things, but you actually have to change them yourself"`,
    author: `Andy Warhol`,
  },
  {
    quote: `"One can find time for everything if one is never in a hurry"`,
    author: `Mikhail Bulgakov`,
  },
  {
    quote: `"Prioritizing is an important aspect of productivity. Listed tasks should be things that matter: things that are in alignment with your objectives and do not distract you from what you really should be doing"`,
    author: `Romuald Andrade`,
  },
  {
    quote: `"Time is a created thing. To say 'I don't have time,' is like saying, 'I don't want to'"`,
    author: `Lao Tzu`,
  },
  {
    quote: `"When was the last time you spent a quiet moment just doing nothin"`,
    author: `just sitting and looking at the sea, or watching the wind blowing the tree limbs, or waves rippling on a pond, a flickering candle or children playing in the park?"`,
    author: `Ralph Marston`,
  },
  {
    quote: `"Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin."`,
    author: `Mother Teresa`,
  },
  {
    quote: `"Time management is an oxymoron. Time is beyond our control, and the clock keeps ticking regardless of how we lead our lives. Priority management is the answer to maximizing the time we have."`,
    author: `John C. Maxwell`,
  },
  {
    quote: `"The time you enjoy wasting is not wasted time"`,
    author: `Bertrand Russell`,
  },
  {
    quote: `"It's being here now that's important. There's no past and there's no future. Time is a very misleading thing. All there is ever, is the now. We can gain experience from the past, but we can't relive it; and we can hope for the future, but we don't know if there is one."`,
    author: `George Harrison`,
  },
  {
    quote: `"Do not wait: the time will never be 'just right'. Start where you stand, and work whatever tools you may have at your command and better tools will be found as you go along."`,
    author: `Napoleon Hill`,
  },
  {
    quote: `"Lost wealth may be replaced by industry, lost knowledge by study, lost health by temperance or medicine, but lost time is gone forever"`,
    author: `Samuel Smiles`,
  },
  {
    quote: `"Time is the most valuable thing on earth: time to think, time to act, time to extend our fraternal relations, time to become better men, time to become better women, time to become better and more independent citizens"`,
    author: `Samuel Gompers`,
  },
  {
    quote: `"At the end of your life, you will never regret not having passed one more test, not winning one more verdict or not closing one more deal. You will regret time not spent with a husband, a friend, a child, or a parent."`,
    author: `Barbara Bush`,
  },
  {
    quote: `"Determine never to be idle. No person will have occasion to complain of the want of time who never loses any. It is wonderful how much can be done if we are always doing."`,
    author: `Thomas Jefferson`,
  },
  {
    quote: `"It's not that we have little time, but more that we waste a good deal of it"`,
    author: `Seneca`,
  },
  {
    quote: `"Those who make the worst use of their time are the first to complain of its brevity"`,
    author: `Jean De La Bruyere`,
  },
  {
    quote: `"Time is one of your most valuable commodities and how you spend it determines what your life will be. You can either waste it, invest it or give it away."`,
    author: `David Khalil`,
  },
  {
    quote: `"I don't dwell in the past; I don't wallow in old events and emotions. I don't waste time on regret. No use going over and over the details of what already happened."`,
    author: `Yanni`,
  },
  {
    quote: `"If people would reflect that one can only do one thing at a time and therefore there is never more than one thing to do at a time, there would be less fatigue in the world"`,
    author: `Emmet Fox`,
  },
  {
    quote: `"How many things in your life do you do automatically, routinely, that are a waste of time but you don't take the time to remedy them?"`,
    author: `Robert S. Scott`,
  },
];

let quote_container = document.getElementById("quote_container");
let author_container = document.getElementById("author_container");
quote_generator();

let btn = document.querySelector(".fa-rotate");
btn.addEventListener("click",quote_generator);

function quote_generator(){
  let rand = Math.floor(Math.random()*40);

  let rand_quote = quotes[rand].quote;
  let rand_author = quotes[rand].author;

  quote_container.innerHTML= rand_quote;
  author_container.innerHTML= "- " +rand_author;
}