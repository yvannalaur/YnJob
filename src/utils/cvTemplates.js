import { template as classic_fr_1_template, name as classic_fr_1_name } from './cvTemplates/classic_fr_1';
import { template as classic_fr_2_template, name as classic_fr_2_name } from './cvTemplates/classic_fr_2';
import { template as classic_fr_3_template, name as classic_fr_3_name } from './cvTemplates/classic_fr_3';
import { template as classic_fr_4_template, name as classic_fr_4_name } from './cvTemplates/classic_fr_4';
import { template as classic_fr_5_template, name as classic_fr_5_name } from './cvTemplates/classic_fr_5';
import { template as classic_fr_6_template, name as classic_fr_6_name } from './cvTemplates/classic_fr_6';
import { template as classic_fr_7_template, name as classic_fr_7_name } from './cvTemplates/classic_fr_7';
import { template as classic_fr_8_template, name as classic_fr_8_name } from './cvTemplates/classic_fr_8';
import { template as classic_fr_9_template, name as classic_fr_9_name } from './cvTemplates/classic_fr_9';
import { template as classic_fr_10_template, name as classic_fr_10_name } from './cvTemplates/classic_fr_10';
import { template as canadian_fr_1_template, name as canadian_fr_1_name } from './cvTemplates/canadian_fr_1';
import { template as canadian_fr_2_template, name as canadian_fr_2_name } from './cvTemplates/canadian_fr_2';
import { template as canadian_fr_3_template, name as canadian_fr_3_name } from './cvTemplates/canadian_fr_3';
import { template as canadian_fr_4_template, name as canadian_fr_4_name } from './cvTemplates/canadian_fr_4';
import { template as canadian_fr_5_template, name as canadian_fr_5_name } from './cvTemplates/canadian_fr_5';

export const generateWatermark = (htmlContent) => {
    const watermarkText = 'Version d\'essai - YnJob';
    const watermarkedHtml = `
        <div style="position: relative;">
            ${htmlContent}
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;">
                <div style="display: flex; flex-direction: column; justify-content: space-around; align-items: center; height: 100%;">
                    ${Array(10).fill(`
                        <div style="display: flex; justify-content: space-around; align-items: center; width: 100%;">
                            ${Array(5).fill(`
                                <span style="color: rgba(0, 0, 0, 0.3); font-size: 24px; transform: rotate(-45deg);">${watermarkText}</span>
                            `).join('')}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    return watermarkedHtml;
};

export const cvTemplates = {
    defaultZoom: 1,
    classic: [
        { template: classic_fr_1_template, name: classic_fr_1_name, zoom: 1 },
        { template: classic_fr_2_template, name: classic_fr_2_name, zoom: 1 },
        { template: classic_fr_3_template, name: classic_fr_3_name, zoom: 1 },
        { template: classic_fr_4_template, name: classic_fr_4_name, zoom: 1 },
        { template: classic_fr_5_template, name: classic_fr_5_name, zoom: 1 },
        { template: classic_fr_6_template, name: classic_fr_6_name, zoom: 1 },
        { template: classic_fr_7_template, name: classic_fr_7_name, zoom: 1 },
        { template: classic_fr_8_template, name: classic_fr_8_name, zoom: 1 },
        { template: classic_fr_9_template, name: classic_fr_9_name, zoom: 1 },
        { template: classic_fr_10_template, name: classic_fr_10_name, zoom: 1 }
    ],
    canadian: [
        { template: canadian_fr_1_template, name: canadian_fr_1_name, zoom: 1 },
        { template: canadian_fr_2_template, name: canadian_fr_2_name, zoom: 1 },
        { template: canadian_fr_3_template, name: canadian_fr_3_name, zoom: 1 },
        { template: canadian_fr_4_template, name: canadian_fr_4_name, zoom: 1 },
        { template: canadian_fr_5_template, name: canadian_fr_5_name, zoom: 1 }
    ]
};
