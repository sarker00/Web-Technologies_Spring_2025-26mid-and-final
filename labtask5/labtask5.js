function analyzeText() {
    let text = document.getElementById("textInput").value;


    if (text.trim() === "") {
        document.getElementById("result").innerHTML = "Please enter some text!";
        return;
    }


    let charCount = text.length;
    
    let words = text.trim().split(" ");
    let wordCount = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] != "") {
            wordCount++;
        }
    }

    let reversed = text.split("").reverse().join("");

    document.getElementById("result").innerHTML =
        "<p><b>Characters:</b> " + charCount + "</p>" +
        "<p><b>Words:</b> " + wordCount + "</p>" +
        "<p><b>Reversed Text:</b><br>" + reversed + "</p>";
}