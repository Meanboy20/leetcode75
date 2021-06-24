function p1() {
  let array = [1, 5, 25, 50];
  let count = [0, 0, 0, 0];
  let res = [];
  let element = $('p1-val');
  let val = element.options[element.selectedIndex].value;
  find48(array, 0, count, res, 0, 0, val);
  $('p1-res').innerHTML = "<tr><th>1&#162;</th><th>5&#162;</th> \
  <th>25&#162;</th><th>50&#162;</th></tr>";
  for (let i = 0; i < val && i < res.length; i++) {
    let array = res[i].split(',');
    $('p1-res').innerHTML += "<tr><td>" + array[0] +"</td><td>" + array[1] +"</td>   \
    <td>" + array[2] +"</td><td>" + array[3] +"</td></tr>";
  }
}


function find48(array, level, count, res, preCount, sum, val) {
   //base case
  if (res.length == val) {
    return;
  }
  if (preCount == 48) {
    if (sum == 100) {
      res.push(count.join(","));
    }
    return;
  }
  if (level == array.length || sum >= 100) {
    return;
  }
  // recursive rule
  for (let i = 0; i <= 48 - preCount; i++) {
    count[level] = i;
    find48(array, level + 1, count, res, preCount + i, sum + i * array[level]);
    count[level] = 0;
  }
}

function p21() {
  $('p2-res').innerHTML = '';
  const suit = ['&#9824;', '<span style="color:red;">&#9829;</span>', '<span style="color:red;">&#9830;</span>', '&#9827;'];
  const num = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  for (let i = 0; i < 4; i++) {
    let str = [];
    for (let j = 0; j < 13; j++) {
      str.push(suit[i] + num[j]);
    }
    $('p2-res').innerHTML += (str.join(' | ') + ' <br>');
  }
}

function p22() {
  $('p2-res').innerHTML = '';
  const suit = ['&#9824;', '<span style="color:red;">&#9829;</span>', '<span style="color:red;">&#9830;</span>', '&#9827;'];
  const num = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  for (let i = 0; i < 4; i++) {
    let tmp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    reorder(tmp);
    let str =[];
    for (let j = 0; j < 13; j++) {
      str.push(suit[i] + num[tmp[j]]);
    }
    $('p2-res').innerHTML += (str.join(' | ') + ' <br>');
  }
}

function p23() {
  $('p2-res').innerHTML = '';
  const suit = ['&#9824;', '<span style="color:red;">&#9829;</span>', '<span style="color:red;">&#9830;</span>', '&#9827;'];
  const num = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let tmp = [];
  for (let i = 0; i < 52; i++) {
    tmp.push(i);
  }
  reorder(tmp);
  for (let i = 0; i < 4; i++) {
    let str = [];
    for (let j = 0; j < 13; j++) {
      let cur = tmp[i * 13 + j];
      str.push(suit[Math.floor(cur / 13)] + num[cur % 13]);
    }
    $('p2-res').innerHTML += (str.join(' | ') + ' <br>');
  }
}

function reorder(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    swap(array, i, rand);
  }
}

function swap(array, x, y) {
  let tmp = array[x];
  array[x] = array[y];
  array[y] = tmp;
}


function next() {
  $('problem1').style.display = "none";
  $('problem2').style.display = "block";
  $('p2-res').innerHTML = '';
}

function prev() {
  $('p1-res').innerHTML = '';
  $('problem1').style.display = "block";
  $('problem2').style.display = "none";
  p1();
}




function $(element) {
  return document.getElementById(element);
}

function showElement(element) {
  element.style.display = 'block';
}

function hideElement(element) {
  element.style.display = 'none';
}
