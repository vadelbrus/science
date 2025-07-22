const HIGHEST_LIVING_COSTS = [
  {
    country: "austria",
    src: "assets/plots/historical/left/austria.png",
    srcInflation: "assets/plots/inflation/left/austria.png",
  },
  {
    country: "iceland",
    src: "assets/plots/historical/left/iceland.png",
    srcInflation: "assets/plots/inflation/left/iceland.png",
  },
  {
    country: "ireland",
    src: "assets/plots/historical/left/ireland.png",
    srcInflation: "assets/plots/inflation/left/ireland.png",
  },

  {
    country: "norway",
    src: "assets/plots/historical/left/norway.png",
    srcInflation: "assets/plots/inflation/left/norway.png",
  },
  {
    country: "germany",
    src: "assets/plots/historical/left/germany.png",
    srcInflation: "assets/plots/inflation/left/germany.png",
  },

  {
    country: "finland",
    src: "assets/plots/historical/left/finland.png",
    srcInflation: "assets/plots/inflation/left/finland.png",
  },

  {
    country: "switzerland",
    src: "assets/plots/historical/left/switzerland.png",
    srcInflation: "assets/plots/inflation/left/switzerland.png",
  },

  {
    country: "luxembourg",
    src: "assets/plots/historical/left/luxembourg.png",
    srcInflation: "assets/plots/inflation/left/luxembourg.png",
  },
  {
    country: "denmark",
    src: "assets/plots/historical/left/denmark.png",
    srcInflation: "assets/plots/inflation/left/denmark.png",
  },

  {
    country: "belgium",
    src: "assets/plots/historical/left/belgium.png",
    srcInflation: "assets/plots/inflation/left/belgium.png",
  },
];

const LOWEST_LIVING_COSTS = [
  {
    country: "montenegro",
    src: "assets/plots/historical/right/montenegro.png",
    srcInflation: "assets/plots/inflation/right/montenegro.png",
  },
  {
    country: "moldova",
    src: "assets/plots/historical/right/moldova.png",
    srcInflation: "assets/plots/inflation/right/moldova.png",
  },
  {
    country: "albania",
    src: "assets/plots/historical/right/albania.png",
    srcInflation: "assets/plots/inflation/right/albania.png",
  },
  {
    country: "ukraine",
    src: "assets/plots/historical/right/ukraine.png",
    srcInflation: "assets/plots/inflation/right/ukraine.png",
  },
  {
    country: "georgia",
    src: "assets/plots/historical/right/georgia.png",
    srcInflation: "assets/plots/inflation/right/georgia.png",
  },
  {
    country: "azerbaijan",
    src: "assets/plots/historical/right/azerbaijan.png",
    srcInflation: "assets/plots/inflation/right/azerbaijan.png",
  },
  {
    country: "armenia",
    src: "assets/plots/historical/right/armenia.png",
    srcInflation: "assets/plots/inflation/right/armenia.png",
  },

  {
    country: "kyrgyzstan",
    src: "/assets/plots/historical/right/kyrgyzstan.png",
    srcInflation: "/assets/plots/inflation/right/kyrgyzstan.png",
  },

  {
    country: "uzbekistan",
    src: "assets/plots/historical/right/uzbekistan.png",
    srcInflation: "assets/plots/inflation/right/uzbekistan.png",
  },
  {
    country: "tajikistan",
    src: "assets/plots/historical/right/tajikistan.png",
    srcInflation: "assets/plots/inflation/right/tajikistan.png",
  },
];

const SECTION_COSTS_PLOTS_LEFT = document.querySelector(
  ".content-salary__chart-left"
);
const SECTION_COSTS_PLOTS_RIGHT = document.querySelector(
  ".content-salary__chart-right"
);
//INFLATION PLOTS
const SECTION_INFLATION_PLOTS_LEFT = document.querySelector(
  ".content-inflation__chart-left"
);
const SECTION_INFLATION_PLOTS_RIGHT = document.querySelector(
  ".content-inflation__chart-right"
);

const DELAY = 1500; // Delay in milliseconds

const showCostsPlots = () => {
  // const leftChartTitle = document.querySelector(".content-salary__title-left");
  // const rightChartTitle = document.querySelector(
  //   ".content-salary__title-right"
  // );
  // Left plots
  HIGHEST_LIVING_COSTS.forEach((chart, index) => {
    const leftImg = `<img src="${chart.src}" class="content-salary__chart-image" alt="${chart.country}">`;
    SECTION_COSTS_PLOTS_LEFT.innerHTML += leftImg;
  });

  //RIGHT PLOTS

  LOWEST_LIVING_COSTS.forEach((chart, index) => {
    const leftImg = `<img src="${chart.src}" class="content-salary__chart-image" alt="${chart.country}">`;
    SECTION_COSTS_PLOTS_RIGHT.innerHTML += leftImg;
  });

  const leftCharts = SECTION_COSTS_PLOTS_LEFT.getElementsByClassName(
    "content-salary__chart-image"
  );

  const rightCharts = SECTION_COSTS_PLOTS_RIGHT.getElementsByClassName(
    "content-salary__chart-image"
  );
  const leftChartsArray = Array.from(leftCharts);
  const rightChartsArray = Array.from(rightCharts);

  leftChartsArray.forEach((chart, index) => {
    console.log(chart);
    setTimeout(() => {
      const leftChartTitle = document.querySelector(
        ".content-salary__title-left"
      );
      leftChartTitle.textContent = HIGHEST_LIVING_COSTS[index].country;

      chart.style.zIndex = index;
      chart.style.opacity = `${index * 0.1}`; // Adjust opacity based on index
      if (leftChartsArray.length - 1 === index) {
        [...leftChartsArray].forEach((chart, index) => {
          chart.style.opacity = "0";
          if (index === leftChartsArray.length - 1) {
            chart.style.opacity = ".5"; // Ensure the last plot is fully visible
            chart.style.zIndex = leftChartsArray.length; // Bring the last plot to the front
            chart.style.transform = "translateX(50%)"; // Center the last plot vertically
            setTimeout(() => {
              chart.style.transform = "translateX(0)";
            }, 3000); // Move the last plot to the right after a delay
          }
        });
      }
    }, DELAY * index);
  });

  rightChartsArray.forEach((chart, index) => {
    setTimeout(() => {
      const rightChartTitle = document.querySelector(
        ".content-salary__title-right"
      );
      rightChartTitle.textContent = LOWEST_LIVING_COSTS[index].country;
      rightChartTitle.style.opacity = "1";
      chart.style.zIndex = index;
      chart.style.opacity = `${index * 0.1}`; // Adjust opacity based on index
      if (rightChartsArray.length - 1 === index) {
        [...rightChartsArray].forEach((chart, index) => {
          chart.style.opacity = "0"; // Set initial opacity to 0
          if (index === rightChartsArray.length - 1) {
            chart.style.opacity = ".5"; // Ensure the last plot is fully visible
            chart.style.zIndex = rightChartsArray.length; // Bring the last plot to the front
            chart.style.transform = "translateX(-50%)"; // Center the last plot vertically
            setTimeout(() => {
              chart.style.transform = "translateX(0)";
            }, 3000); // Move the last plot to the right after a delay
          }
        });
      }
    }, DELAY * index);
  });
};

const showInflationPlots = () => {
  // const leftChartTitle = document.querySelector(".content-salary__title-left");
  // const rightChartTitle = document.querySelector(
  //   ".content-salary__title-right"
  // );
  // Left plots
  HIGHEST_LIVING_COSTS.forEach((chart, index) => {
    const leftImg = `<img src="${chart.srcInflation}" class="content-inflation__chart-image">`;
    SECTION_INFLATION_PLOTS_LEFT.innerHTML += leftImg;
  });

  //RIGHT PLOTS

  LOWEST_LIVING_COSTS.forEach((chart, index) => {
    const leftImg = `<img src="${chart.srcInflation}" class="content-inflation__chart-image">`;
    SECTION_INFLATION_PLOTS_RIGHT.innerHTML += leftImg;
  });

  const leftCharts = SECTION_INFLATION_PLOTS_LEFT.getElementsByClassName(
    "content-inflation__chart-image"
  );

  console.log(leftCharts);
  const rightCharts = SECTION_INFLATION_PLOTS_RIGHT.getElementsByClassName(
    "content-inflation__chart-image"
  );

  console.log(rightCharts);
  const leftChartsArray = Array.from(leftCharts);
  const rightChartsArray = Array.from(rightCharts);

  leftChartsArray.forEach((chart, index) => {
    console.log(chart);
    setTimeout(() => {
      // const leftChartTitle = document.querySelector(
      //   ".content-inflation__title-left"
      // );
      // leftChartTitle.textContent = HIGHEST_LIVING_COSTS[index].country;

      chart.style.zIndex = index;
      chart.style.opacity = `${index * 0.1}`; // Adjust opacity based on index
      if (leftChartsArray.length - 1 === index) {
        [...leftChartsArray].forEach((chart, index) => {
          chart.style.opacity = "0";
          if (index === leftChartsArray.length - 1) {
            chart.style.opacity = ".5"; // Ensure the last plot is fully visible
            chart.style.zIndex = leftChartsArray.length; // Bring the last plot to the front
            chart.style.transform = "translateX(50%)"; // Center the last plot vertically
            setTimeout(() => {
              chart.style.transform = "translateX(0)";
            }, 3000); // Move the last plot to the right after a delay
          }
        });
      }
    }, DELAY * index);
  });

  rightChartsArray.forEach((chart, index) => {
    setTimeout(() => {
      // const rightChartTitle = document.querySelector(
      //   ".content-inflation__title-right"
      // );
      // rightChartTitle.textContent = LOWEST_LIVING_COSTS[index].country;
      // rightChartTitle.style.opacity = "1";
      chart.style.zIndex = index;
      chart.style.opacity = `${index * 0.1}`; // Adjust opacity based on index
      if (rightChartsArray.length - 1 === index) {
        [...rightChartsArray].forEach((chart, index) => {
          chart.style.opacity = "0"; // Set initial opacity to 0
          if (index === rightChartsArray.length - 1) {
            chart.style.opacity = ".5"; // Ensure the last plot is fully visible
            chart.style.zIndex = rightChartsArray.length; // Bring the last plot to the front
            chart.style.transform = "translateX(-50%)"; // Center the last plot vertically
            setTimeout(() => {
              chart.style.transform = "translateX(0)";
            }, 3000); // Move the last plot to the right after a delay
          }
        });
      }
    }, DELAY * index);
  });
};

showCostsPlots();
showInflationPlots();

// let costOffset = 1030;
// let inflationOffset = 2685;
// let securityOffset = 3615;

// const costTitle = document.querySelector(".section-historical__title");
// const inflationTitle = document.querySelector(".section-inflation__title");
// const securityTitle = document.querySelector(".section-security__title");

// window.addEventListener("scroll", () => {
//   if (window.scrollY >= costOffset - 300) {
//     costTitle.classList.add("is-visible");
//     // showCostsPlots();
//   }
//   if (window.scrollY >= inflationOffset - 300) {
//     inflationTitle.classList.add("is-visible");
//     // showInflationPlots();
//   }
//   if (window.scrollY >= securityOffset - 300) {
//     securityTitle.classList.add("is-visible");
//     // showSecurityPlots();
//   }
// });
