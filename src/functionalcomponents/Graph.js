import React, { useEffect } from "react";
import {Chart} from "chart.js";

export default function Graph() {
  useEffect(() => {
    const dataLabels = [1,2,3,4,5,6];
    const thicknessData = ["10%","20%","30%","40%","50%","60%"];
    const bgColor = ["red","red","red","red","red","red"];
    // console.log(props.thicknessError)
    // props.thicknessError.map((eachRegion) => {
    //   dataLabels.push(eachRegion.Barcode);
    //   thicknessData.push(parseInt(eachRegion.thickness) - 100);
    //   bgColor.push(parseInt(eachRegion.thickness) > 100 ? "red" : "#FF7E00");
    // });

    // Chart.helpers.each(Chart.instances, function (instance) {
    //   if (instance.chart.canvas.id === "myChart") {
    //     instance.destroy();
    //     return;
    //   }
    // });

    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: dataLabels,
        datasets: [
          {
            data: thicknessData,
            backgroundColor: bgColor,
            borderWidth: 1,
            datalabels: {
              color: 'white',
              align: 'center',
              font:{
                  size:'16'
              }
             }
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        showAllTooltips: true,

        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "white",
                fontSize: "12",
                beginAtZero: false
              },
              display: true,

              gridLines: {
                color: "grey",
                zeroLineColor: "white",
                zeroLineWidth: "2",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "white",
                fontSize: "12",
              },

              gridLines: {
                display: true,
                color: "grey",
              },
            },
          ],
        },

        legend: {
          display: false,
        },
      },
    });
  });
  return (
    <React.Fragment>
      <div className="text-left">
        <h6>Solder Paste Thickness</h6>
      </div>
      <div className="d-flex justify-content-center p-3">
        <div
          className="p-2 m-1"
          style={{ backgroundColor: "red", fontSize: "1rem" }}
        >
          Board Over 100%
        </div>
        <div
          className="p-2 m-1"
          style={{ backgroundColor: "#FF7E00", fontSize: "1rem" }}
        >
          Board Under 100%{" "}
        </div>
      </div>
      <div className="thicknessCanvas">
        <canvas id="myChart" />
      </div>
    </React.Fragment>
  );
}
