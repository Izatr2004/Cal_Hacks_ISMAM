function fun1() {
  const output1 = document.getElementById('output1');
  const txt1 = document.getElementById('text1');
  output1.innerHTML = txt1.value;
}

document.addEventListener('load', () => {

const button1 = document.getElementById('button1');
  button1.addEventListener('click',fun1);
})

            