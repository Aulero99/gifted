// import { AboutController } from "./controllers/AboutController.js";
// import { HomeController } from "./controllers/HomeController.js";

// export const router = [
//   {
//     path: '',
//     controller: HomeController
//   },
//   {
//     path: '#/about',
//     controller: AboutController
//   }
// ]


import { GiftsController } from "./controllers/GiftsController.js";
import { HomeController } from "./controllers/HomeController.js";
// import { SandboxController } from "./controllers/SandboxController.js";

export const router = [
  {
    path: '',
    controller: [GiftsController]
  }
]