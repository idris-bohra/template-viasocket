// CONSTANT-DECLARATION.
let TEMPLATE_TYPES = {
    DATA_VS_SLIDER: 'data-vs-slider',
    DATA_VS_POPUP: 'data-vs-popup',
    DATA_VS_STANDARD: 'data-vs-standard',
    DATA_VS_FULLPAGE: 'data-vs-fullpage',
}
let TEMPLATE_NAME = 'viasocket-template';
let IFRAME_ATTRIBUTE = 'iframe-template-type';
let IFRAME_PARENT_ATTRIBUTE = 'iframe-parent-template-type';

// GETTING-ALL-THE-TEMPLATES.
const wcSlider = document.querySelectorAll(`${TEMPLATE_NAME}[${TEMPLATE_TYPES.DATA_VS_SLIDER}]`);
// const wcPopup = document.querySelectorAll(`${TEMPLATE_NAME}[${TEMPLATE_TYPES.DATA_VS_POPUP}]`);
// const wcStandard = document.querySelectorAll(`${TEMPLATE_NAME}[${TEMPLATE_TYPES.DATA_VS_STANDARD}]`);
// const wcFullpage = document.querySelectorAll(`${TEMPLATE_NAME}[${TEMPLATE_TYPES.DATA_VS_FULLPAGE}]`);

// HANDLING-THE-SLIDER-TEMPLATE-TYPE.
wcSlider.forEach(element => {
    element.addEventListener("click", () => {
        const parentDiv = document.createElement('div');
        const divElement = document.createElement('div');
        divElement.setAttribute(IFRAME_ATTRIBUTE, TEMPLATE_TYPES.DATA_VS_SLIDER);
        parentDiv.setAttribute(IFRAME_PARENT_ATTRIBUTE, TEMPLATE_TYPES.DATA_VS_SLIDER);
        const templateId = element.getAttribute(TEMPLATE_TYPES.DATA_VS_SLIDER);
        const iframe = document.createElement("iframe");
        const imgElement = document.createElement("img");
        imgElement.src = "./close-icon.svg";
        imgElement.style.width = '24px';
        imgElement.classList.add('wc-slider-close-btn');
        iframe.setAttribute(IFRAME_ATTRIBUTE, TEMPLATE_TYPES.DATA_VS_SLIDER);
        iframe.src = `https://www.viasocket.com`;
        iframe.style.width = '100%';
        iframe.style.height = "100%";
        divElement.appendChild(iframe);
        divElement.appendChild(imgElement)
        parentDiv.appendChild(divElement)
        document.body.appendChild(parentDiv);
        document.body.style.overflow = "hidden";
        imgElement.addEventListener('click', () => {
            parentDiv.style.display="none";
            document.body.style.overflow = "auto";
        })
    });
});
