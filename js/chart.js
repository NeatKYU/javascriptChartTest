let ctx = document.getElementById("myChart").getContext("2d");
const res = chartDataSet("MONTH", "1001");
let chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: res.data.categories,
    datasets: [
      {
        label: res.data.series.name,
        data: res.data.series.ea,
      },
    ],
  },

  option: {},
});

const chartDataSet = async ({ term, sid }) => {
  try {
    const response = await axios.get(
      "http://localhost:8000/SALES/COMPANY/GET/" +
        term +
        "/PRODUCTS-AMOUNT/" +
        sid
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
