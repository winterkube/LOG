// src/components/games/HowToMath/cutscenes/cutsceneData.js

import { introPreCutscene, introPostCutscene } from './1-introCS';
import {decimalPostCutscene, decimalPreCutscene} from "./2-decimalCS";
import {speed1PostCutscene, speed1PreCutscene} from "./3-speed1CS";


export const Cutscenes = {
        1: {
            pre: introPreCutscene,
            post: introPostCutscene, // We'll define post-level cutscenes later
        },
        2: {
            pre: decimalPreCutscene,
            post: decimalPostCutscene,
        },
        3: {
            pre: speed1PreCutscene,
            post: speed1PostCutscene,
        },

};
