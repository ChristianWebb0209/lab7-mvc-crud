
### lab 7, MVC and CRUD

In this lab, I made a chat window with a bot using the MVC pattern.

## user docs

To use, just typewhat you want to say in the chat and press enter or click send. You can save or load chats also.

## MVC Architecture

My project is formated with an entry point (app.js) which sets up the MVC pattern:
Model: handles all of the data storage operations
View: handles all frontend logic and DOM modifying
Controller: handles the interaction between model and view
index.html and style.css handle markup and styling
eliza.js handles the bot responses

## Decisions and Notes

Difficulties with implementation:
I found it pretty hard to get started on this project. I ended up stubbing a lot of the components beforehand. The other hard part was testing things. I feel like this lab was hard to gradually build up, because just to get to the first working version you need to build the model, view, and controller all to a basic working stage. I ended up having a pretty long marathon without testing, which I generally try to avoid. Luckily this didn't cause me too much hastle - I know it's bad practice. 

Edit buttons on messages:
At first I followed the advice of ChatGPT and modified inline html and made components manually in view.js (createMessageElement) to handle this. This kinda got unwieldy, so I tried a different approach. My second idea was to build HTML templates for both the normal message and the view message, then attatch event listeners in view.js (createMessageElement). Right away this approach made a lot more logical sense and felt way cleaner. Looking just at index.html and seeing the templates at the bottom makes it immediately obvious how I handle the edit buttons and how the DOM structure looks to have this functionality. It also made styling make a lot more sense, because essentially all of the concerns are in index.html and style.css, not strewn throughout the codebase.

Callbacks:
When looking at code online it seemed callbacks were the widely used for applications using the MVC pattern, and I was tempted to follow along and use them here. I didn't fully understand callbacks at the time (I know them better now after the lecture), and I also didn't see a reason why we HAD to use them in this project, so I decided to push them to the side. I think this was the right decision, they would have just added complexity to this project. Maybe in a more complex project they would have some merit, but I really don't see it here.

