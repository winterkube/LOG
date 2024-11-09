// src/components/games/HowToMath/levels/levelData.js

import { introTrial } from './1-introTrial';
import {decimalTrial} from "./2-decimalTrial";
import {speedTrialI} from "./3-speedTrial1";
import {algebraTrial} from "./4-algebraTrial";
import {exponentTrial} from "./5-exponentTrial";
import {trigonometryTrial} from "./6-trigonometryTrial";
import {enduranceTrial} from "./7-enduranceTrial";
import {speedTrialII} from "./8-speedTrial2";
// Import other levels...

export const Levels = {
    1: introTrial, // song = waterflame-glorious, bpm = 76
    2: decimalTrial, // song = fb-harmony, bpm = 65
    3: speedTrialI, // song = bgc-chipzeal
    4: algebraTrial, // song = bgc-vindicateme
    5: exponentTrial, // song = creo-shine, bpm = 90
    6: trigonometryTrial, // song = schtiffles-33
    7: enduranceTrial, // song = falsenoise-shiver, bpm = 95
    8: speedTrialII, // song = f777-wormhole
    // 9: quadraticTrial, // song = creo-deepdive
    // 10: variablesTrial, // song = lockyn-vapor, bpm = 77.5
    // 11: derivativeTrial, // song = detlock-allure
    // 12: integralTrial, // song = duocore-carnage, bpm = 115
    // 13: speedTrialIII, // song = creo-aheadofthecurve, bpm = 96
    // 14: complexTrial, // song = schtiffles-thedark
    // 15: judgementTrial, // song = metea11-troubles

    // Add other levels...
};
