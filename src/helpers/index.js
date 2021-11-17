export const waitingGifs = {
  alls: [
    "https://media2.giphy.com/media/5YmR3flwyyzzG/giphy.gif",
    "https://media4.giphy.com/media/FRKr3vM1BiCyc/giphy.gif?cid=bef064a8jlksu31wck0rk7fp26b68kox5i26jw3auj1famb3&rid=giphy.gif",
    "https://media3.giphy.com/media/JBN6hII6XhuWk/giphy.webp?cid=ecf05e471z3noo9zxv2mgj4iatujqq4gvmupmaggwqup08v8&rid=giphy.webp",
    "https://media2.giphy.com/media/3og0IKMmOZE88Ankty/200w.webp?id=ecf05e47z96hx0oh2ir26a4asvu7merw3ur4wlxmv2q1gzz6&rid=200w.webp",
    "https://media4.giphy.com/media/ftGTY1fO9ARUI/giphy.gif?cid=bef064a8miy8b156m625hxit83z1suvfew0ptej17htgt3iu&rid=giphy.gif",
    "https://i.giphy.com/media/zGnnFpOB1OjMQ/100.webp",
    "https://i.giphy.com/media/dwL34LIvm9TxzAVOyL/giphy.webp",
    "https://i.giphy.com/media/qUHxAava8vmUg/giphy.webp",
    "https://i.giphy.com/media/UDjF1zMreMld6/200.webp",
    "https://i.giphy.com/media/lHG3hUhmrvTwI/100.webp",
  ],
  tvOff: "https://4.bp.blogspot.com/-e8QyWiFOB20/VDh7d7VL9qI/AAAAAAAAFQ0/hKx28r1s7RE/s1600/tvoff.gif",
};

let colors = [
  "#c0392b",
  "#2980b9",
  "#e67e22",
  "#f39c12",
  "#1abc9c",
  "#bdc3c7",
  "#8e44ad",
  "#bdc3c7",
];

export const numberRandom = (len) => Math.floor(Math.random() * len); 

export const randomColor = ()=> colors[numberRandom(colors.length)]; 

export const sanitizeProps = res => {
  let props = Object.entries(res);
  let validProps = props.filter(ele=> ele[1] !== 'N/A');
  let details = validProps.reduce((acc,ele)=> {
    let [ key, val ] = ele;
    acc[key] = val;
    return acc;
  } ,{})

  return details;
}