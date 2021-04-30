var axiom = "F";
var sentence  = axiom;
var angle;
var len = 100;
var rules = [];
rules[0] = {
    a: "F",
    //b: "FF+[+F--[-F+F+F]"
    b: "FF+[+F-++---+--+[-FF+F]"
};

//problem with this code is that when the rule has two letter, it would not work.
// const tenzinAxiom = "F";
// let sentence = tenzinAxiom;
// let len = 100;
// let angle;
// const rules = [];
// rules[0] = {
//     a: 'F',
//     b: 'F[+F][-F]FF[-+F]F'
// };

// rules[1] = {
//     a: 'B',
//     b: 'A'
// };


// function generate(){
//     len*=.5;
//     let nextSentence = "";
//     for(let i = 0; i< 5; i++) {
//         let current = sentence.charAt(i);
//         let found = false;
//         for (let j = 0; j < rules.length; j++) {
//             if (current === rules[j].a) {
//                 found = true;
//                 nextSentence += rules[j].b;
//                 break;
//             }
//         }
//         if (!found) {
//             nextSentence += current;
//         }
//     }
//     sentence = nextSentence;
//     createP(sentence);
//     turtle();
//
// }
//
// function turtle(){
//     background(51);
//     resetMatrix();
//     stroke(255);
//     translate(width/2, height);
//     for(let i = 0; i < sentence.length; i++){
//         let current = sentence.charAt(i);
//
//         if(current === 'F'){
//             line(0,0,0,-len);
//             translate(0, -len);
//         }
//         else if(current === '+'){
//             rotate(angle);
//         }else if(current === '-'){
//             rotate(-angle);
//         }else if(current === '['){
//             push();
//         }else if(current === ']'){
//             pop();
//         }
//     }
// }




// function turtle(){
//     background(51);
//     resetMatrix();
//     translate(width/2, height);
//     stroke(255);
//     for (var i = 0; i < algaeSentence.length; i++ ){
//         var current = algaeSentence.charAt(i);
//         if(current === "A"){
//             line(0,0,0,len);
//             translate(0,len);
//             // push();
//         } else if (current === "B"){
//             rotate(angle);
//             // line(0,0,0,len);
//             // pop();
//         }
//     }
// }

function generate(){
    len *= 0.4;
    var nextSentence = "";
    for(var i  = 0; i < sentence.length; i++){
        var current = sentence.charAt(i);
        var found = false;
        for(var j = 0; j < rules.length; j++){
            if(current == rules[j].a){
                found = true;
                nextSentence += rules[j].b;
                break;
            }
        }
        if(!found){
            nextSentence += current;
        }
    }
    sentence = nextSentence;
    createP(sentence)
    turtle();
}

function turtle(){
    background(51);
    resetMatrix();
    translate(width/2, height);
    stroke(255);
    for (var i = 0; i < sentence.length; i++ ){
        var current = sentence.charAt(i);

        if(current == "F"){
            line(0,0,0,-len);
            translate(0,-len);
        } else if (current == "+"){
            rotate(angle);
        } else if(current == "-"){
            rotate(-angle);
        } else if((current == "[") || (current == "]")){
            push();
        } else if (current == "]"){
            pop();
        }
    }
}

function setup(){
    createCanvas(400, 400);
    angle = radians(8);
    background(51);
    createP(axiom);
    turtle();
    let button = createButton("generate");
    button.mousePressed(generate);
}
