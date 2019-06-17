/**
 * 模板字符串
 */

//  let template = '<h1>Hello World!</h1><p>ES6语法展示的内容</p>';

let name = "Arthur"
function makeUpperCase(word){
    return word.toUpperCase();
}

let template = 
`
<h1>${makeUpperCase('Hello')} , ${name}</h1>
<p>ES6语法展示的内容</p>
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
`;
 document.getElementById('template').innerHTML = template