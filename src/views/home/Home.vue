<template>
  <div class="home">
    <apex-charts
      height="400px"
      :options="barChartOptions"
      :series="barChartSeries"
      class="home__bar-chart"
    />
    <a-row>
      <a-col :span="8" class="home__chart-container">
        <apex-charts
          :options="pieChartOptions"
          :series="pieChartSeries"
          class="home__chart home__pie-chart"
        />
      </a-col>
      <a-col :span="16">
        <apex-charts
          height="250px"
          :options="areaChartOptions"
          :series="areaChartSeries"
          class="home__chart"
        />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    "apex-charts": VueApexCharts
  },
  data() {
    return {
      barChartSeries: [
        {
          name: "Inflation",
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }
      ],
      barChartOptions: {
        chart: {
          height: 350,
          type: "bar",
          toolbar: {
            show: false
          }
        },
        grid: {
          show: false
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top" // top, center, bottom
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"]
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          position: "bottom",
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function(val) {
              return val + "%";
            }
          }
        }
      },
      pieChartSeries: [44, 55, 41, 17, 15],
      pieChartOptions: {
        chart: {
          type: "donut"
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      },
      areaChartSeries: [
        {
          name: "STOCK ABC",
          data: [2, 3, 5, 6, 7, 8, 3, 4, 6, 7]
        }
      ],
      areaChartOptions: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        grid: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        title: {
          text: "System load",
          align: "left",
          style: {
            fontWeight: "normal",
            fontSize: "20px"
          }
        },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: "left"
        }
      }
    };
  }
};
</script>

<style scoped>
.home {
  padding-bottom: 50px;
}

.home__bar-chart {
  margin-bottom: 50px;
}

.home__chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home__pie-chart {
  width: 80%;
}
</style>
