const charts = document.querySelectorAll(".chart");

charts.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["PPE Kits", "Capsules", "Injections", "Bandages", "Beds", "Others"],
      datasets: [
        {
          label: "Equipment in stock",
          data: [8, 27, 12, 9, 20, 56],
          backgroundColor: [
            "rgb(199, 143, 190)",
            "rgb(110, 119, 125)",
            "rgb(117, 189, 131)",
            "rgb(204, 195, 112)",
            "rgb(162, 107, 135)",
            "rgb(141, 35, 194)",
          ],
          
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

