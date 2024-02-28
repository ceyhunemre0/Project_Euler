list = [
    '75',
    '95 64',
    '17 47 82',
    '18 35 87 10',
    '20 04 82 47 65',
    '19 01 23 75 03 34',
    '88 02 77 73 07 63 67',
    '99 65 04 28 06 16 70 92',
    '41 41 26 56 83 40 80 70 33',
    '41 48 72 33 47 32 37 16 94 29',
    '53 71 44 65 25 43 91 52 97 51 14',
    '70 11 33 28 77 73 17 78 39 68 17 57',
    '91 71 52 38 17 14 91 43 58 50 27 29 48',
    '63 66 04 68 89 53 67 30 73 16 69 87 40 31',
    '04 62 98 27 23 09 70 98 73 93 38 53 60 04 23'
]

_list = [];
let ans;


// list dizisini iki boyutlu bir int dizisine çeviriyoruz.
for (var i = 0; i < list.length; i++) {
    _list.push(list[i].split(" "));
}

for (var i = 0; i < _list.length; i++) {
    for (var j = 0; j < _list[i].length; j++) {
        _list[i][j] = (parseInt(_list[i][j]));
    }
}

for (var i = 0; i < _list.length; i++) {
    for (var j = 0; j < _list[i].length; j++) {
        if (i == 0) {
            continue;
        }
        else if (j == 0) { // ilk eleman için
            _list[i][j] += _list[i - 1][j];
        }
        else if (j == _list[i].length - 1) { // son eleman için
            _list[i][j] += _list[i - 1][j - 1];
        }
        else { // diğer elemanlar için
            _list[i][j] += Math.max(_list[i - 1][j - 1], _list[i - 1][j]);
        }
    }
}


// Listenin en son satırındaki en büyük sayıyı ans değişkenine atıyoruz.
for (let i = 0; i < _list[_list.length - 1].length; i++) {
    if (i == 0) {
        ans = _list[_list.length - 1][i];
    } else
        ans = Math.max(ans, _list[_list.length - 1][i]);
}

console.log(ans);