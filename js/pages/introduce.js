import history from "../../assets/constant/history.js";

const filterMonth = (month) => {
  if (month < 10) return `0${month}`;
  else return month;
};

const writeHistory = () => {
  const chart = document.querySelector(".history-chart");
  let historyText = "";
  history.map((val) => {
    const { year, performance } = val;
    historyText += `
    <div class="history-oneyear history-${year}">
        <div class="year">${year}</div>
        <ul class="trace-list">
            ${performance
              .map(
                (trace) =>
                  `
                <li class="trace-item">
                    <div class="month">${filterMonth(trace.month)}</div>
                    <ul class="performance-list">
                        ${trace.trace
                          .map(
                            (item) => `
                            <li class="performance-item">${item}</li>
                        `
                          )
                          .join("")}
                    </ul>
                </li>
                `
              )
              .join("")}
        <ul>
    </div>
    `;
  });
  chart.innerHTML = historyText;
};

writeHistory();
