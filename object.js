const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.setAttribute('style', 'color: red; background: white');
content.textContent = "Hey I'm red!";

container.appendChild(content);

const heading3 = document.createElement('H3');
heading3.classList.add('heading3');
heading3.setAttribute('style', 'color: blue; background: white');
heading3.textContent = "I'm a blue h3!";

container.appendChild(heading3);

const moreStuff = document.createElement('div');
moreStuff.classList.add('moreStuff');
moreStuff.setAttribute('style', 'color: black; background: pink; border: thick solid black;');
moreStuff.textContent = "I'm a blue h3!";

container.appendChild(moreStuff);