export const params = {
  commonCpuBoostClock: { name: "CPU Boost Clock", offset: 3, value: 3000000 },
  commonEmcMemVolt: { name: "RAM Vdd2", offset: 4, value: 1350000 },
  eristaCpuMaxVolt: { name: "CPU Voltage Limit", offset: 5, value: 1235 },
  eristaEmcMaxClock: { name: "RAM MHz", offset: 6, value: 2124800 },
  marikoCpuMaxVolt: { name: "CPU Maximum Voltage", offset: 7, value: 1150 },
  marikoEmcMaxClock: { name: "RAM MHz", offset: 8, value: 2400000 },
  marikoEmcVddqVolt: { name: "RAM Vddq", offset: 9, value: 650000 },
  marikoCpuUV: { name: "CPU Low MHz Undervolt", offset: 10, value: 0 },
  marikoGpuUV: { name: "GPU Undervolt Mode", offset: 11, value: 0 },
  CPUv: { name: "CPU Minimal Voltage", offset: 12, value: 3 },
  GPUv: { name: "GPU Minimal Voltage", offset: 13, value: 3 },
  marikoEmcDvbShift: { name: "RAM EMC DVB Mode", offset: 14, value: 3 },
  drochr01: { name: "Core timings 1", offset: 15, value: 1 },
  drochr02: { name: "Core timings 2", offset: 16, value: 1 },
  drochr03: { name: "Core timings 3", offset: 17, value: 1 },
  drochr04: { name: "Core timings 4", offset: 18, value: 1 },
  drochr05: { name: "Core timings 5", offset: 19, value: 1 },
  drochr06: { name: "Core timings 6", offset: 20, value: 1 },
  drochr07: { name: "Core timings 7", offset: 21, value: 1 },
  marikoGpuVoltArray: {
    name: [
      "192MHz",
      "230MHz",
      "307MHz",
      "384MHz",
      "460MHz",
      "537MHz",
      "614MHz",
      "691MHz",
      "768MHz",
      "844MHz",
      "921MHz",
      "998MHz",
      "1075MHz",
      "1152MHz",
      "1228MHz",
      "1305MHz",
      "1344MHz",
      "1382MHz",
      "1420MHz",
      "1459MHz",
      "1497MHz",
      "1536MHz",
      "1574MHz",
      "1612MHz",
    ],
    offset: 22,
    subOffset: 1,
    value: [
      395, 420, 445, 470, 495, 520, 545, 570, 595, 620, 645, 670, 695, 720, 750,
      780, 810, 840, 870, 900, 930, 960, 990, 1020,
    ],
  },
  // eristaCpuDvfsTable: {
  //   name: "",
  //   offset: 46,
  //   subOffsets: { fromStart: 14, relative: [0, 2, 8, 9, 10] },
  //   value: [
  //     [408000, 786986],
  //     [510000, 819932],
  //     [612000, 852878],
  //     [714000, 885824],
  //     [816000, 918770],
  //     [918000, 951716],
  //     [1020000, 984662, -2875621, 358099, -8585],
  //     [1122000, 1017608, -52225, 104159, -2816],
  //     [1224000, 1050554, 1076868, 8356, -727],
  //     [1326000, 1083500, 2208191, -84659, 1240],
  //     [1428000, 1116446, 2519460, -105063, 1611],
  //     [1581000, 1130000, 2889664, -122173, 1834],
  //     [1683000, 1168000, 5100873, -279186, 4747],
  //     [1785000, 1227500, 5100873, -279186, 4747],
  //     [1887000, 1235000, 5100873, -279186, 4747],
  //     [1963500, 1235000, 5100873, -279186, 4747],
  //     [2091000, 1235000, 5100873, -279186, 4747],
  //     [2193000, 1235000, 5100873, -279186, 4747],
  //     [2295000, 1235000, 5100873, -279186, 4747],
  //     [2397000, 1235000, 5100873, -279186, 4747],
  //     [2499000, 1235000, 5100873, -279186, 4747],
  //     [2602000, 1235000, 5100873, -279186, 4747],
  //   ],
  // },
  // marikoCpuDvfsTable: {
  //   name: "",
  //   offset: 480,
  //   subOffsets: { fromStart: 14, relative: [0, 2, 3, 4, 8] },
  //   value: [
  //     [408000, 760024, -18195, 113],
  //     [510000, 789258, -19055, 113],
  //     [612000, 853926, -20775, 113],
  //     [714000, 889361, -21625, 113],
  //     [816000, 926862, -22485, 113],
  //     [918000, 966431, -23345, 113],
  //     [1020000, 1008066, -24205, 113, 1120000],
  //     [1122000, 1051768, -25065, 113, 1120000],
  //     [1224000, 1097537, -25925, 113, 1120000],
  //     [1326000, 1145373, -26785, 113, 1120000],
  //     [1428000, 1195276, -27645, 113, 1120000],
  //     [1581000, 1274006, -28935, 113, 1120000],
  //     [1683000, 1329076, -29795, 113, 1120000],
  //     [1785000, 1386213, -30655, 113, 1120000],
  //     [1887000, 1445416, -31515, 113, 1120000],
  //     [1963500, 1490873, -32155, 113, 1120000],
  //     [2091000, 1580725, -33235, 113, 1120000],
  //     [2193000, 1580725, -33235, 113, 1235000],
  //     [2295000, 1635431, -34095, 113, 1235000],
  //     [2397000, 1702903, -34955, 113, 1235000],
  //     [2499000, 1754400, -35643, 113, 1235000],
  //     [2602000, 1805897, -36331, 113, 1235000],
  //   ],
  // },
  // marikoCpuDvfsTableSLT: {
  //   name: "",
  //   offset: 914,
  //   subOffsets: { fromStart: 14, relative: [0, 2, 3, 4, 8] },
  //   value: [
  //     [408000, 760024, -18195, 113],
  //     [510000, 789258, -19055, 113],
  //     [612000, 853926, -20775, 113],
  //     [714000, 889361, -21625, 113],
  //     [816000, 926862, -22485, 113],
  //     [918000, 966431, -23345, 113],
  //     [1020000, 1008066, -24205, 113, 1120000],
  //     [1122000, 1051768, -25065, 113, 1120000],
  //     [1224000, 1097537, -25925, 113, 1120000],
  //     [1326000, 1145373, -26785, 113, 1120000],
  //     [1428000, 1195276, -27645, 113, 1120000],
  //     [1581000, 1274006, -28935, 113, 1120000],
  //     [1683000, 1329076, -29795, 113, 1120000],
  //     [1785000, 1386213, -30655, 113, 1120000],
  //     [1887000, 1445416, -31515, 113, 1120000],
  //     [1963500, 1490873, -32155, 113, 1120000],
  //     [2091000, 1580725, -33235, 113, 1120000],
  //     [2193000, 1580725, -33235, 113, 1235000],
  //     [2295000, 1635431, -34095, 113, 1235000],
  //     [2397000, 1702903, -34955, 113, 1235000],
  //     [2499000, 1754400, -35643, 113, 1235000],
  //     [2601000, 1805897, -36331, 113, 1235000],
  //     [2703000, 1857394, -37019, 113, 1235000],
  //     [2805000, 1908891, -37707, 113, 1235000],
  //     [2907000, 1960388, -38395, 113, 1235000],
  //     [3009000, 2011885, -39083, 113, 1235000],
  //   ],
  // },
  eristaGpuDvfsTable: {
    name: [
      "192MHz",
      "230MHz",
      "268MHz",
      "307MHz",
      "345MHz",
      "384MHz",
      "422MHz",
      "460MHz",
      "499MHz",
      "537MHz",
      "576MHz",
      "614MHz",
      "652MHz",
      "691MHz",
      "729MHz",
      "768MHz",
      "806MHz",
      "844MHz",
      "883MHz",
      "921MHz",
      "960MHz",
      "998MHz",
      "1036MHz",
      "1075MHz",
      "1113MHz",
    ],
    offset: 1356,
    subOffset: 14,
    value: [
      675000, 687500, 700000, 712500, 725000, 737500, 750000, 762500, 775000,
      787500, 800000, 812500, 825000, 837500, 850000, 862500, 875000, 887500,
      912500, 925000, 950000, 962500, 975000, 1000000, 1037500,
    ],
  },
  // marikoGpuDvfsTable: {
  //   name: "",
  //   offset: 1782,
  //   subOffsets: { fromStart: 14, relative: [0, 8] },
  //   value: [
  //     [192000, 430000],
  //     [230400, 445000],
  //     [307200, 465000],
  //     [384000, 490000],
  //     [460800, 510000],
  //     [537600, 535000],
  //     [614400, 560000],
  //     [691200, 585000],
  //     [768000, 610000],
  //     [844800, 635000],
  //     [921600, 660000],
  //     [998400, 685000],
  //     [1075200, 715000],
  //     [1152000, 750000],
  //     [1228800, 785000],
  //     [1305600, 845000],
  //     [1344000, 875000],
  //     [1382400, 905000],
  //     [1420800, 935000],
  //     [1459200, 960000],
  //   ],
  // },
  // marikoGpuDvfsTableSLT: {
  //   name: "",
  //   offset: 2216,
  //   subOffsets: { fromStart: 14, relative: [0, 8] },
  //   value: [
  //     [192000, 410000],
  //     [230400, 425000],
  //     [307200, 445000],
  //     [384000, 465000],
  //     [460800, 490000],
  //     [537600, 520000],
  //     [614400, 545000],
  //     [691200, 565000],
  //     [768000, 590000],
  //     [844800, 615000],
  //     [921600, 640000],
  //     [998400, 665000],
  //     [1075200, 695000],
  //     [1152000, 735000],
  //     [1228800, 775000],
  //     [1305600, 805000],
  //     [1344000, 840000],
  //     [1382400, 865000],
  //     [1420800, 890000],
  //     [1458200, 915000],
  //     [1497600, 940000],
  //     [1536000, 960000],
  //   ],
  // },
  // marikoGpuDvfsTableHiOPT: {
  //   name: "",
  //   offset: 2650,
  //   subOffsets: { fromStart: 14, relative: [0, 8] },
  //   value: [
  //     [192000, 400000],
  //     [230400, 420000],
  //     [307200, 435000],
  //     [384000, 460000],
  //     [460800, 480000],
  //     [537600, 505000],
  //     [614400, 530000],
  //     [691200, 550000],
  //     [768000, 575000],
  //     [844800, 600000],
  //     [921600, 625000],
  //     [998400, 650000],
  //     [1075200, 675000],
  //     [1152000, 700000],
  //     [1228800, 725000],
  //     [1305600, 760000],
  //     [1344000, 785000],
  //     [1382400, 810000],
  //     [1420800, 835000],
  //     [1458200, 860000],
  //     [1497600, 885000],
  //     [1534000, 910000],
  //     [1574400, 935000],
  //     [1612800, 960000],
  //   ],
  // },
  SpeedShift: { name: "CPU Speed Shift", offset: 3084, value: 0 },
  marikoCpuHUV: { name: "CPU High MHz Undervolt", offset: 3085, value: 1 },
  hGPUv: { name: "GPU Overvolt", offset: 3086, value: 0 },
  dCPUv: { name: "dCPUv", offset: 3087, value: 0 },
  eBAL: { name: "EMC Balance", offset: 3088, value: 0 },
  drochr08: { name: "Core timings 8", offset: 3089, value: 1 },
  eBAS: { name: "EBA-Shift", offset: 3090, value: 0 },
  pMEH: {
    name: [
      "pMeh0",
      "pMeh1",
      "pMeh2",
      "pMeh3",
      "pMeh4",
      "pMeh5",
      "pMeh6",
      "pMeh7",
      "pMeh8",
      "pMeh9",
      "pMeh10",
      "pMeh11",
      "pMeh12",
      "pMeh13",
      "pMeh14",
      "pMeh15",
      "pMeh16",
      "pMeh17",
      "pMeh18",
      "pMeh19",
      "pMeh20",
      "pMeh21",
    ],
    offset: 3091,
    subOffset: 1,
    value: [0, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 2],
  },
  sMEH: {
    name: [
      "sMeh0",
      "sMeh1",
      "sMeh2",
      "sMeh3",
      "sMeh4",
      "sMeh5",
      "sMeh6",
      "sMeh7",
      "sMeh8",
      "sMeh9",
      "sMeh10",
      "sMeh11",
      "sMeh12",
      "sMeh13",
    ],
    offset: 3115,
    subOffset: 1,
    value: [4, 2, 2, 2, 2, 2, 0, 1, 0, 1, 0, 2, 0, 0],
  },
  // SHAITAN: {
  //   name: "",
  //   offset: 3139,
  //   value: [0, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 0],
  // },
};
