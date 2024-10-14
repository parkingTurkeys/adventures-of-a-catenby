/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/


//#all-the-arrays #arrays #ilovearrays #i-dont-care-if-some-of-them-are-objects #what-is-an-object-help
  const dialogue = [
    "haiii!",
    "i'm river!",
    "i use they/them pronouns",
    ":3",
    "askdmkn djsvn kvb kdbvkdsvbjksdvnjksdnvjkdsnvjkdsnv"
  ]

  function endGame() {
    setMap(levels[levels.length - 1])
  }
  const playerphoto = "p"
  const textbox = "t"
  const textboxtop = "^"
  const pumpkin = "ó"
  const bgroom = "-"
  const cursor = "#"

  const peoplephotos = [
    playerphoto,
    playerphoto,
    playerphoto,
    playerphoto,
    playerphoto
  ]
  setLegend(
    [ cursor, bitmap`
  ...0............
  ...000..........
  ...0220.........
  ...022200.......
  ...02222200.....
  ...022222220....
  ...02222220.....
  ...0222220......
  ...022220.......
  ...0222220......
  ...02202220.....
  ...000.02220....
  ...0....020.....
  .........0......
  ................
  ................`],
    [ pumpkin, bitmap `................
  .......4........
  ......44........
  ......4.........
  ....9999999.....
  ..99999999999...
  .9999999999999..
  .9900099900099..
  .9900099900099..
  .9999999999999..
  .9990000000999..
  .9990000000999..
  .9999000009999..
  ..99999999999...
  ....9999999.....
  ................`],
    [ playerphoto, bitmap`
  0000000000000000
  0992222222229990
  09CC99000009CC90
  09CCC990009CCC90
  099CC0900000C990
  029C000022200000
  0200222222222200
  0002000022000000
  0002000222000200
  0002000222000200
  0002222222222200
  0002222002222000
  0000222222222000
  0000002222000000
  0000002220000000
  0000000000000000` ],
    [ textbox, bitmap`
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD`],
    [ textboxtop, bitmap`
  DDDDDDDDDDDDDDDD
  4444444444444444
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDD`],
    [ bgroom, bitmap`
  7777777777777777
  7777777777777777
  7777777777777777
  7777777777777777
  7777777777777777
  7777777777777777
  7777777777777777
  7777777777777777
  7777777777777777
  7777777777777777
  7777777777777777
  7777777777777777
  7777777777777777
  7777777777777777
  7777777777777777
  7777777777777777`]
  )

  setSolids([])

  let level = 0
  const levels = [
    map`
  ----------
  ----------
  ----------
  ----------
  ----------
  ^^^^^^^^^^
  tttttttttt
  tttttttttt`,
    map`
  ----------
  ----------
  ----------
  ----------
  ----------
  ^^^^^^^^^^
  tttttttttt
  tttttttttt`,
    map`
  ----------
  ----------
  ----------
  ----------
  ----------
  ^^^^^^^^^^
  tttttttttt
  tttttttttt`,
    map`
  ----------
  -tttttttt-
  -tttttttt-
  -tttttttt-
  -tttttttt-
  -tttttttt-
  -tttttttt-
  ----------`

  ]

  const music = tune`
  205.4794520547945: D4^205.4794520547945 + E5/205.4794520547945 + C5/205.4794520547945,
  205.4794520547945,
  205.4794520547945: D4^205.4794520547945,
  205.4794520547945: D5-205.4794520547945,
  205.4794520547945: D4^205.4794520547945,
  205.4794520547945: F4~205.4794520547945 + G5/205.4794520547945 + B4/205.4794520547945,
  205.4794520547945: G4~205.4794520547945 + D4^205.4794520547945 + F5/205.4794520547945 + C5/205.4794520547945,
  205.4794520547945: A4~205.4794520547945 + D5-205.4794520547945 + E5/205.4794520547945,
  205.4794520547945: F4~205.4794520547945 + A5^205.4794520547945 + D5-205.4794520547945,
  205.4794520547945: F4~205.4794520547945,
  205.4794520547945: G4~205.4794520547945 + A5^205.4794520547945,
  205.4794520547945: A4~205.4794520547945,
  205.4794520547945: B4~205.4794520547945 + A5^205.4794520547945,
  205.4794520547945: A4~205.4794520547945,
  205.4794520547945: A4~205.4794520547945 + A5^205.4794520547945,
  205.4794520547945: G4~205.4794520547945 + D5-205.4794520547945,
  205.4794520547945: F4~205.4794520547945,
  205.4794520547945: E4~205.4794520547945 + D4^205.4794520547945 + A4/205.4794520547945,
  205.4794520547945: E4~205.4794520547945 + F5/205.4794520547945,
  205.4794520547945: F4~205.4794520547945 + D4^205.4794520547945 + A4/205.4794520547945,
  205.4794520547945: G4~205.4794520547945 + A4~205.4794520547945 + E5/205.4794520547945,
  205.4794520547945: A4~205.4794520547945 + B4~205.4794520547945 + D4^205.4794520547945 + C5/205.4794520547945,
  205.4794520547945: B4~205.4794520547945 + D5/205.4794520547945,
  205.4794520547945: B4~205.4794520547945 + D4^205.4794520547945,
  205.4794520547945: B4~205.4794520547945 + A4~205.4794520547945 + D5-205.4794520547945 + G5/205.4794520547945 + G4/205.4794520547945,
  205.4794520547945: G4~205.4794520547945 + F5/205.4794520547945 + B4/205.4794520547945,
  205.4794520547945: G4~205.4794520547945 + F4~205.4794520547945 + E4~205.4794520547945 + A5^205.4794520547945 + E5/205.4794520547945,
  205.4794520547945: E4~205.4794520547945,
  205.4794520547945: E4~205.4794520547945 + A5^205.4794520547945 + F5/205.4794520547945 + B4/205.4794520547945,
  205.4794520547945: E4~205.4794520547945 + D5/205.4794520547945 + G4/205.4794520547945,
  205.4794520547945: E4~205.4794520547945 + A5^205.4794520547945 + D5-205.4794520547945 + B4/205.4794520547945,
  205.4794520547945: E4~205.4794520547945 + G5/205.4794520547945
  `
musicPlay = true
playback = playTune(music, Infinity)

//title screen

addText("adventures",{x:3, y:2, color:color`0`})
addText("of a ",{x:3, y:4, color:color`0`})
addText("catenby",{x:3, y:6, color:color`0`})


setMap(levels[level])
nexttext(playerphoto,"welcome!")
addSprite(5,2,pumpkin)
addSprite(1,1,cursor)


x = 0;
onInput("k", () => {
  if (level==0){
    level = 1
    let cursorxnow = getFirst(cursor).x
    let cursorynow = getFirst(cursor).y
    getAll(cursor).remove
    setMap(levels[level])
    addSprite(cursorxnow,cursorynow,cursor)

  }
  clearText()
  if (peoplephotos[x]) {
    nexttext(peoplephotos[x],dialogue[x])
  } else {
    endGame()
  }
  x++

})
onInput("w", () => {
  getFirst(cursor).y --
})
onInput("a", () => {
  getFirst(cursor).x --
})
onInput("s", () => {
  getFirst(cursor).y ++
})
onInput("d", () => {
  getFirst(cursor).x ++
})
function nexttext(person,text) {
  clearTile(1,6)
  addSprite(1,6,textbox)
  addSprite(1,6,person)
  if (text.length <= 14){
    addText(text,{x:5, y:12, color:color`5`})
  } else if (text.length <= 28) {
    addText(text.slice(0,14),{x:5, y:12, color:color`5`})
    addText(text.slice(14),{x:5, y:13, color:color`5`})
  } else {
    addText(text.slice(0,14),{x:5, y:12, color:color`5`})
    addText(text.slice(14,28),{x:5, y:13, color:color`5`})
    addText(text.slice(28,42),{x:5, y:14, color:color`5`})
  }
}
