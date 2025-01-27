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
  { name: "アユム", image: "images/アユム.png" },
  { name: "アラタ", image: "images/アラタ.png" },
  { name: "アリス", image: "images/アリス.png" },
  { name: "アル", image: "images/アル.png" },
  { name: "アロナ", image: "images/アロナ.png" },
  { name: "イオリ", image: "images/イオリ.png" },
  { name: "イズナ", image: "images/イズナ.png" },
  { name: "イズミ", image: "images/イズミ.png" },
  { name: "イチカ", image: "images/イチカ.png" },
  { name: "イブキ", image: "images/イブキ.png" },
  { name: "イロハ", image: "images/イロハ.png" },
  { name: "ウイ", image: "images/ウイ.png" },
  { name: "ウタハ", image: "images/ウタハ.png" },
  { name: "ウミカ", image: "images/ウミカ.png" },
  { name: "エイミ", image: "images/エイミ.png" },
  { name: "エリカ", image: "images/エリカ.png" },
  { name: "オウル", image: "images/オウル.png" },
  { name: "オトギ", image: "images/オトギ.png" },
  { name: "カイ", image: "images/カイ.png" },
  { name: "カエデ", image: "images/カエデ.png" },
  { name: "カグヤ", image: "images/カグヤ.png" },
  { name: "カスミ", image: "images/カスミ.png" },
  { name: "カズサ", image: "images/カズサ.png" },
  { name: "カホ", image: "images/カホ.png" },
  { name: "カヤ", image: "images/カヤ.png" },
  { name: "カヨコ", image: "images/カヨコ.png" },
  { name: "カリン", image: "images/カリン.png" },
  { name: "カンナ", image: "images/カンナ.png" },
  { name: "キキョウ", image: "images/キキョウ.png" },
  { name: "キサキ", image: "images/キサキ.png" },
  { name: "キララ", image: "images/キララ.png" },
  { name: "キリノ", image: "images/キリノ.png" },
  { name: "クズノハ", image: "images/クズノハ.png" },
  { name: "クルミ", image: "images/クルミ.png" },
  { name: "コクリコ", image: "images/コクリコ.png" },
  { name: "ココナ", image: "images/ココナ.png" },
  { name: "コタマ", image: "images/コタマ.png" },
  { name: "コトリ", image: "images/コトリ.png" },
  { name: "コノカ", image: "images/コノカ.png" },
  { name: "コハル", image: "images/コハル.png" },
  { name: "コユキ", image: "images/コユキ.png" },
  { name: "サオリ", image: "images/サオリ.png" },
  { name: "サキ", image: "images/サキ.png" },
  { name: "サクラコ", image: "images/サクラコ.png" },
  { name: "サツキ", image: "images/サツキ.png" },
  { name: "サヤ", image: "images/サヤ.png" },
  { name: "シグレ", image: "images/シグレ.png" },
  { name: "シズコ", image: "images/シズコ.png" },
  { name: "シノン", image: "images/シノン.png" },
  { name: "シミコ", image: "images/シミコ.png" },
  { name: "シュロ", image: "images/シュロ.png" },
  { name: "シュン", image: "images/シュン.png" },
  { name: "シュン（幼女）", image: "images/シュン（幼女）.png" },
  { name: "シロコ", image: "images/シロコ.png" },
  { name: "シロコテラー", image: "images/シロコテラー.png" },
  { name: "ジュリ", image: "images/ジュリ.png" },
  { name: "ジュンコ", image: "images/ジュンコ.png" },
  { name: "スオウ", image: "images/スオウ.png" },
  { name: "スズミ", image: "images/スズミ.png" },
  { name: "スミレ", image: "images/スミレ.png" },
  { name: "スモモ", image: "images/スモモ.png" },
  { name: "セイア", image: "images/セイア.png" },
  { name: "セナ", image: "images/セナ.png" },
  { name: "セリカ", image: "images/セリカ.png" },
  { name: "セリナ", image: "images/セリナ.png" },
  { name: "ソフ", image: "images/ソフ.png" },
  { name: "ソラ", image: "images/ソラ.png" },
  { name: "タカネ", image: "images/タカネ.png" },
  { name: "チアキ", image: "images/チアキ.png" },
  { name: "チェリノ", image: "images/チェリノ.png" },
  { name: "チセ", image: "images/チセ.png" },
  { name: "チナツ", image: "images/チナツ.png" },
  { name: "チヒロ", image: "images/チヒロ.png" },
  { name: "ツクヨ", image: "images/ツクヨ.png" },
  { name: "ツバキ", image: "images/ツバキ.png" },
  { name: "ツルギ", image: "images/ツルギ.png" },
  { name: "トキ", image: "images/トキ.png" },
  { name: "トモエ", image: "images/トモエ.png" },
  { name: "ナグサ", image: "images/ナグサ.png" },
  { name: "ナツ", image: "images/ナツ.png" },
  { name: "ニコ", image: "images/ニコ.png" },
  { name: "ニヤ", image: "images/ニヤ.png" },
  { name: "ニヤニヤ教授", image: "images/ニヤニヤ教授.png" },
  { name: "ネル", image: "images/ネル.png" },
  { name: "ノア", image: "images/ノア.png" },
  { name: "ノゾミ", image: "images/ノゾミ.png" },
  { name: "ノドカ", image: "images/ノドカ.png" },
  { name: "ノノミ", image: "images/ノノミ.png" },
  { name: "ハスミ", image: "images/ハスミ.png" },
  { name: "ハナエ", image: "images/ハナエ.png" },
  { name: "ハナコ", image: "images/ハナコ.png" },
  { name: "ハルカ", image: "images/ハルカ.png" },
  { name: "ハルナ", image: "images/ハルナ.png" },
  { name: "ハレ", image: "images/ハレ.png" },
  { name: "ヒカリ", image: "images/ヒカリ.png" },
  { name: "ヒナ", image: "images/ヒナ.png" },
  { name: "ヒナタ", image: "images/ヒナタ.png" },
  { name: "ヒビキ", image: "images/ヒビキ.png" },
  { name: "ヒフミ", image: "images/ヒフミ.png" },
  { name: "ヒマリ", image: "images/ヒマリ.png" },
  { name: "ヒヨリ", image: "images/ヒヨリ.png" },
  { name: "フィーナ", image: "images/フィーナ.png" },
  { name: "フウカ", image: "images/フウカ.png" },
  { name: "フブキ", image: "images/フブキ.png" },
  { name: "プラナ", image: "images/プラナ.png" },
  { name: "ホシノ", image: "images/ホシノ.png" },
  { name: "マイ", image: "images/マイ.png" },
  { name: "マキ", image: "images/マキ.png" },
  { name: "マコト", image: "images/マコト.png" },
  { name: "マシロ", image: "images/マシロ.png" },
  { name: "マリナ", image: "images/マリナ.png" },
  { name: "マリー", image: "images/マリー.png" },
  { name: "ミカ", image: "images/ミカ.png" },
  { name: "ミサキ", image: "images/ミサキ.png" },
  { name: "ミチル", image: "images/ミチル.png" },
  { name: "ミドリ", image: "images/ミドリ.png" },
  { name: "ミナ", image: "images/ミナ.png" },
  { name: "ミネ", image: "images/ミネ.png" },
  { name: "ミノリ", image: "images/ミノリ.png" },
  { name: "ミモリ", image: "images/ミモリ.png" },
  { name: "ミヤコ", image: "images/ミヤコ.png" },
  { name: "ミユ", image: "images/ミユ.png" },
  { name: "ミライ", image: "images/ミライ.png" },
  { name: "ムツキ", image: "images/ムツキ.png" },
  { name: "メグ", image: "images/メグ.png" },
  { name: "メル", image: "images/メル.png" },
  { name: "モエ", image: "images/モエ.png" },
  { name: "モミジ", image: "images/モミジ.png" },
  { name: "モモイ", image: "images/モモイ.png" },
  { name: "モモカ", image: "images/モモカ.png" },
  { name: "ヤクモ", image: "images/ヤクモ.png" },
  { name: "ユウカ", image: "images/ユウカ.png" },
  { name: "ユカリ", image: "images/ユカリ.png" },
  { name: "ユキノ", image: "images/ユキノ.png" },
  { name: "ユズ", image: "images/ユズ.png" },
  { name: "ユメ", image: "images/ユメ.png" },
  { name: "ヨシミ", image: "images/ヨシミ.png" },
  { name: "ラブ", image: "images/ラブ.png" },
  { name: "リオ", image: "images/リオ.png" },
  { name: "リン", image: "images/リン.png" },
  { name: "ルミ", image: "images/ルミ.png" },
  { name: "レイ", image: "images/レイ.png" },
  { name: "レイサ", image: "images/レイサ.png" },
  { name: "レイジョ", image: "images/レイジョ.png" },
  { name: "レンゲ", image: "images/レンゲ.png" },
  { name: "ワカモ", image: "images/ワカモ.png" },
];

let availablePairs = [];
let scores = {};
let totalComparisons = 0;
let comparisonsDone = 0;

function initializeGame() {
  scores = {};
  availablePairs = [];
  totalComparisons = (characters.length * (characters.length - 1)) / 2;
  comparisonsDone = 0;

  characters.forEach(character => {
    scores[character.name] = 0;
  });

  for (let i = 0; i < characters.length; i++) {
    for (let j = i + 1; j < characters.length; j++) {
      availablePairs.push([characters[i], characters[j]]);
    }
  }

  shuffleArray(availablePairs);
  updateComparison();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function updateComparison() {
  if (availablePairs.length === 0) {
    showResults();
    return;
  }

  comparisonsDone++;
  updateProgress();

  const [leftCharacter, rightCharacter] = availablePairs.shift();

  const leftElement = document.querySelector("#left");
  const rightElement = document.querySelector("#right");

  leftElement.querySelector("img").src = leftCharacter.image;
  leftElement.querySelector("img").alt = leftCharacter.name;
  leftElement.querySelector("img").onclick = () => chooseCharacter(leftCharacter, rightCharacter);
  leftElement.querySelector(".name").textContent = leftCharacter.name;

  rightElement.querySelector("img").src = rightCharacter.image;
  rightElement.querySelector("img").alt = rightCharacter.name;
  rightElement.querySelector("img").onclick = () => chooseCharacter(rightCharacter, leftCharacter);
  rightElement.querySelector(".name").textContent = rightCharacter.name;
}

function updateProgress() {
  const percentage = Math.floor((comparisonsDone / totalComparisons) * 100);
  document.getElementById("progress-percentage").textContent = `${percentage}%`;
}

function chooseCharacter(winner, loser) {
  scores[winner.name]++;
  updateComparison();
}

function showResults() {
  document.getElementById("comparison").style.display = "none";
  document.getElementById("results").style.display = "block";

  const sortedCharacters = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(entry => characters.find(c => c.name === entry[0]));

  displayPyramidRanking(sortedCharacters);
  displayTextRanking(sortedCharacters);
}

function displayPyramidRanking(sortedCharacters) {
  const pyramid = document.getElementById("pyramid-ranking");
  pyramid.innerHTML = "";

  const rows = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];
  rows.forEach((row, rowIndex) => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("rank-row");

    row.forEach(rank => {
      const character = sortedCharacters[rank - 1];
      if (character) {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("rank-item");

        const img = document.createElement("img");
        img.src = character.image;
        img.alt = character.name;
        img.style.width = `${200 - rowIndex * 40}px`;
        img.style.height = `${200 - rowIndex * 40}px`;

        const text = document.createElement("div");
        text.classList.add("rank-text");
        text.textContent = `${rank}位: ${character.name}`;

        itemDiv.appendChild(img);
        itemDiv.appendChild(text);
        rowDiv.appendChild(itemDiv);
      }
    });

    pyramid.appendChild(rowDiv);
  });
}

function displayTextRanking(sortedCharacters) {
  const textRanking = document.getElementById("text-ranking");
  textRanking.innerHTML = "";

  sortedCharacters.slice(10).forEach((character, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 11}位: ${character.name}`;
    textRanking.appendChild(li);
  });
}

initializeGame();
