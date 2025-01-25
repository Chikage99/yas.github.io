// scripts.js
const characters = [
  { name: "アイリ", image: "images/アイリ.png" },
  { name: "アイン", image: "images/アイン.png" },
  { name: "アオイ", image: "images/アオイ.png" },
  { name: "アカネ", image: "images/アカネ.png" },
  { name: "アカリ", image: "images/アカリ.png" },
  { name: "アキラ", image: "images/アキラ.png" },
  { name: "アケミ", image: "images/アケミ.png" },
  { name: "アコ", image: "images/アコ.png" },
  { name: "アスナ", image: "images/アスナ.png" },
  { name: "アズサ", image: "images/アズサ.png" },
  { name: "アツコ", image: "images/アツコ.png" },
  { name: "アヤネ", image: "images/アヤネ.png" },

];

let availablePairs = []; // 比較用ペアの候補リスト
let results = []; // ソート結果の保存

// 配列をシャッフルする関数 (Fisher-Yatesアルゴリズム)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 初期化: ペアリストを生成
function initializePairs() {
  availablePairs = [];

  // キャラクター同士をすべて組み合わせてペアを作成
  for (let i = 0; i < characters.length; i++) {
    for (let j = i + 1; j < characters.length; j++) {
      availablePairs.push([characters[i], characters[j]]);
    }
  }

  shuffleArray(availablePairs); // ペアをランダムに並べ替える
}

// 比較ペアを取得して表示
function updateComparison() {
  if (availablePairs.length === 0) {
    showResults(); // すべてのペアを比較し終えたら結果表示
    return;
  }

  // 次のペアを取得
  const [leftCharacter, rightCharacter] = availablePairs.shift();

  // 左右キャラクターの画像と名前を更新
  const leftElement = document.querySelector("#left");
  const rightElement = document.querySelector("#right");

  // 画像の更新
  leftElement.querySelector("img").src = leftCharacter.image;
  leftElement.querySelector("img").alt = leftCharacter.name;
  leftElement.querySelector("img").onclick = () => chooseCharacter(leftCharacter, rightCharacter);

  rightElement.querySelector("img").src = rightCharacter.image;
  rightElement.querySelector("img").alt = rightCharacter.name;
  rightElement.querySelector("img").onclick = () => chooseCharacter(rightCharacter, leftCharacter);

  // 名前の表示
  leftElement.querySelector(".name").textContent = leftCharacter.name;
  rightElement.querySelector(".name").textContent = rightCharacter.name;
}

// キャラクター選択時の処理
function chooseCharacter(winner, loser) {
  // 既に選ばれたキャラクターが結果に含まれていないかチェック
  if (!results.some(character => character.name === winner.name)) {
    // 勝者を結果リストに追加 (後で順位付け)
    results.push(winner);
  }

  // 敗者を再度利用するため末尾に追加 (重複しないようにチェック)
  if (!results.some(character => character.name === loser.name)) {
    results.push(loser);
  }

  // 次の比較に進む
  updateComparison();
}

// 結果表示処理
function showResults() {
  document.getElementById("comparison").style.display = "none";
  document.getElementById("results").style.display = "block";

  const ranking = document.getElementById("ranking");
  ranking.innerHTML = ""; // 過去の結果をクリア

  // 1位〜10位を画像付きでピラミッド状に表示
  const rankRows = [
    [results[0]], // 1位
    [results[1], results[2]], // 2位、3位
    [results[3], results[4], results[5]], // 4位、5位、6位
    [results[6], results[7], results[8], results[9]], // 7位、8位、9位、10位
  ];

  rankRows.forEach((row, rowIndex) => {
    let rankRowElement = document.createElement("div");
    rankRowElement.classList.add("rank-row");

    row.forEach((character, index) => {
      let rankItem = document.createElement("div");
      rankItem.classList.add("rank-item");

      // 画像表示部分
      let imgElement = document.createElement("img");
      imgElement.src = character.image;
      imgElement.alt = character.name;
      imgElement.classList.add("rank-image"); // 画像のクラス追加

      // 名前表示部分
      let nameElement = document.createElement("div");
      nameElement.textContent = character.name;

      rankItem.appendChild(imgElement);
      rankItem.appendChild(nameElement);
      rankRowElement.appendChild(rankItem);
    });

    ranking.appendChild(rankRowElement);
  });

  // 11位以降を文字だけで表示
  if (results.length > 10) {
    let othersRanking = document.createElement("ul");
    for (let i = 10; i < results.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = `${i + 1}. ${results[i].name}`;
      othersRanking.appendChild(listItem);
    }
    ranking.appendChild(othersRanking);
  }
}


// 初期化処理
initializePairs();
updateComparison();