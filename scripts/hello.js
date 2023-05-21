
let respond = (item) => {
    let item_id = document.getElementById(item)
    console.log("adding event litstner");
    
    const curr_style = Object.assign({}, item_id.style);


    item_id.addEventListener("mouseover", () => {
        set_new_style(item_id);
    })
    
    item_id.addEventListener("mouseout", () => {
        revert_to_original(item_id, curr_style);
    })

    item_id.addEventListener("mousedown", () => {
        alert("That's an API call");
    })
}

let set_new_style = (id) => {
    id.style.color = r_c();
    id.style.fontSize = '100px';
    image_url = `url(images/${id.id}.png)`
    id.style.backgroundImage= image_url;
    id.style.borderRadius= '100px'
    id.style.height = '800px'
    id.style.backgroundSize = '100% 100%';
}

let revert_to_original = (id, curr_style) => {
    Object.entries(curr_style).forEach(([prop, value]) => {
        id.style[prop] = value;
    })
}





let r_c = () => {
    var rgb = [];
    for(var i = 0; i < 3; i++)
        rgb.push(Math.floor(Math.random() * 255));
    return 'rgb('+ rgb.join(',') +')';
}


let ids = ["abt","exp","skl","crt"];
ids.forEach((v) => {
    respond(v);
})


const typeTerminalText = (text, typingSpeed) => {
    const terminalElement = document.getElementById('terminal');

    set_terminal_style(terminalElement)
    let currentIndex = 0;
  
    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        terminalElement.textContent += text[currentIndex];
        currentIndex++;
        setTimeout(typeNextCharacter, typingSpeed);
      } 
    };
    
    typeNextCharacter();
};

let set_terminal_style = (id) => {
    id.style.color = r_c();
    id.style.fontSize = '40px';
    id.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
    image_url = `url(images/${id.id}.png)`
    id.style.backgroundImage= image_url;
    id.style.borderRadius= '100px'
    id.style.height = '400px'
    id.style.backgroundSize = '100% 100%';
    id.style.lineHeight = '200px'
    id.style.textAlign= 'center';
}
  
let terminal_msg = `Hi... Thanks for taking a look. This is a single page website with plain old 
html, css & javascript.`;
typeTerminalText(terminal_msg, 100);