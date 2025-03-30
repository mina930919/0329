let question = "請問 5 + 3 等於多少？";
let radio;
let submitButton;
let resultMessage = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#CFBFF7");

  // 顯示題目
  textAlign(CENTER, CENTER);
  textSize(18);
  fill(0);
  text(question, width / 2 , height / 2 - 80);

  // 建立選項
  radio = createRadio();
  radio.option("6");
  radio.option("7");
  radio.option("8");
  radio.option("9");
  radio.style("width", "200px");
  radio.position(width / 2 - 80, height / 2 - 50);

  // 建立送出按鈕
  submitButton = createButton("送出");
  submitButton.position(width / 2 - 30, height / 2 - 10);
  submitButton.mousePressed(checkAnswer);
}

function draw() {
  background("#CFBFF7");

  // 顯示題目
  textAlign(CENTER, CENTER);
  textSize(18);
  fill(0);
  text(question, width / 2 , height / 2 - 80);

  // 顯示結果訊息
  textSize(16);
  fill(resultMessage === "答對了！" ? "green" : "red");
  text(resultMessage, width / 2, height / 2 + 40);
}

function checkAnswer() {
  const selected = radio.value();
  if (selected === "8") {
    resultMessage = "答對了！";
  } else if (!selected) {
    resultMessage = "請選擇一個答案！";
  } else {
    resultMessage = "答錯了！";
  }
}
