---
title: "Handy tips for software support"
date: 2018-04-21T11:30:54-05:00
draft: false
Categories:
- Support
Description: Tips for being the best software support person EVER!
Tags:
- Support
---

One thing I did not realize when I started my career as a software engineer was how much time would be spent investigating issues and fixing bugs. At my current company, my teammates and I take turns being the point-person for production issues and support tickets; it's not my favorite shift, but it needs to be done.

<!-- more -->

Being responsible for several issues and bugs can be quite overwhelming, especially if you bounce between several support tickets multiple times a day. Over the past few years, I've adopted several practices that I've found helpful, and maybe they can help you too!

## 1. Be organized
It sounds obvious, but organization is can drastically improve your efficiency as a programmer. When returning to work on a ticket in the morning or after a weekend or after working on something else, we want to spend less time asking "what was this all about again?" or "how far along was I in this?" and more time fixing the problem. Here's how I like to stay organized. 

### Folder
I like to have a folder that contains a folder for each ticket I'm dealing with that shift. Each folder is labeled with the ticket number and a brief description (usually the title of the ticket). In each folder, I keep any data files that I may have copied from one of our file servers. If I have taken any notes that don't need to shared on the ticket itself, I'll keep those here too. Lastly, I keep a SQL file here (more on that later).

![Folder Screenshot](/img/posts/folders.png)

An extra note about files: if you are investigating a data issue and you have a set of files that have good data and some that have bad, clearly label them GOOD and BAD. It sounds obvious, but I've only just started doing this, and it really helps. The less you have to access the hard-drive that is your long term memory, the faster you work. More significantly, there's nothing worse than scrutinizing a file thinking it's a bad file when, in fact, it is not.

### Bookmarks
Similar to our filesystem folder, it is good to have a clearly labeled bookmark folder that has bookmarks to any and all pages relevant to the ticket. Links to reading material, Stack Overflow questions, and documentation are all valuable items to preserve. If you are working on a web application, bookmarks to the pagesof issue are very handy as well.

![Bookmark Screenshot](/img/posts/bookmarks.png)

### SQL
Lastly, I like to have a SQL file that contains any queries that I use in my investigation of the ticket. Personally, this has been the most helpful practice of all. When jumping back and forth between tickets, I found that I was having to recreate certain queries each time to catch up to where I was before. This is an absolute waste of time. If you have any queries that aren't obvious in their function, slap a comment on them; you may remember what they do now, but you might not after a long weekend.

## 2. Be humble
### Ask for help
You want to find an optimal balance between asking for help and figuring it out yourself. In my experience, that balance is found in asking for help more often than not. What I mean by "asking for help" is not asking someone to solve your problems, but rather to point you in the right direction. If you are afraid that you are bothering your teammates, remember, it's better to spend 15 minutes of both of your time figuring something out than you banging your head against that problem for an hour. If your teammates have been in the game for awhile, I'm sure they understand this. 

Your fellow engineers aren't the only people who can help you in fixing issues. If the issue was reported by technical support or customer representative; make sure to chat with them about anything ambiguous or unclear in the ticket. Avoid wasting time solving the wrong problems.

### Don't be arrogant, just don't
If a client is reporting behavior in your application as a bug or issue, and tech support sends it up to you, but it turns out the application is working as intended, or the issue is due to customer error; be gracious in your response.

1. **Don't** make the tech support person or client feel dumb for not realizing this.
2. **Do** use this as an opportunity to reevalute your application to see if there are ways to prevent this issue from happening again.
3. Seriously, be kind. It goes a long way.

## 3. Be helpful
### Work with your support team
If you aren't interfacing with customers directly, someone else is, and they are probably the person who reported the ticket. Be conscious of the pressure this position can bring. Be quick in your first reponse to a ticket; if there's any information you can give immediately, provide that as soon as you can. Also, keep them posted on any updates; you don't want your customers to feel like you aren't working on their issue. Furthermore, if there is a tech support / customer support manager, talk to him or her to see if they have a priority list of which issues should be addressed first. It can be tempting to work on issues that appeal to you, but that is not helpful for your team. Trust your support teams to accurately gauge the feelings of the customer.

### Lend a hand to your fellow engineers
In larger engineer teams, it's hard to know the ins and outs of every software component. When you are done investigating and resolving an issue, document it. If you found yourself debugging an poorly documented system, fix that! Don't let the next developer have to go through the same thing as you. You can both document this in a permanent place where your teammates can easily find it, but also I'd encourage just sending a message to your teammates saying something along the lines of "Hey all, I just was investigating *x* and found out *y* and *z*, let me know if you'd like to hear more about it."

Okay, that's all I got. I hope you find at least some of this helpful. Now go put out those fires!