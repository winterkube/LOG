// src/components/games/HowToMath/cutscenes/cutsceneData.js

import { introPreCutscene, introPostCutscene } from './1-introCS';
import {decimalPostCutscene, decimalPreCutscene} from "./2-decimalCS";
import {speed1PreCutscene} from "./3-speed1CS";
import {algebraPreCutscene, algebraPostCutscene} from "./4-algebraCS";
import {exponentPreCutscene} from "./5-exponentCS";
import {trigPreCutscene} from "./6-trigonometryCS";
import {endurancePreCutscene} from "./7-enduranceCS";
import {speed2PreCutscene} from "./8-speed2CS";


export const Cutscenes = {
        1: {
            // pre: introPreCutscene,
            // post: introPostCutscene, // We'll define post-level cutscenes later
        },
        2: {
            // pre: decimalPreCutscene,
            // post: decimalPostCutscene,
        },
        3: {
            // pre: speed1PreCutscene,

        },
        4: {
            // pre: algebraPreCutscene,
            post: algebraPostCutscene
        },

        5: {
            pre: exponentPreCutscene,
        },
        6: {
            pre: trigPreCutscene,
        },
        7: {
            pre: endurancePreCutscene,
        },
        8: {
            pre: speed2PreCutscene,
        },


};
