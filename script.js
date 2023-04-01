//your JS code here. If required.
function randomDelay() {
  return Math.floor(Math.random() * 3) + 1;
}

const promises = [
  new Promise((resolve) => {
    setTimeout(() => resolve('Promise 1'), randomDelay() * 1000);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve('Promise 2'), randomDelay() * 1000);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve('Promise 3'), randomDelay() * 1000);
  }),
];

Promise.all(promises)
  .then((results) => {
    const output = document.querySelector('#output');
    output.innerHTML = '';
    let totalTime = 0;
    results.forEach((result, i) => {
      const time = randomDelay();
      output.innerHTML += `
        <tr>
          <td>${result}</td>
          <td>${time}</td>
        </tr>
      `;
      totalTime += time;
    });
    output.innerHTML += `
      <tr>
        <td>Total</td>
        <td>${totalTime.toFixed(3)}</td>
      </tr>
    `;
  });
