/**
 * Create a HTML Element and bind Attributes
 * @param {String} el HTML element name
 * @param {Object} options Optional configs {innerHtml , [childElements], {eventsListeners}}
 * @param {String} options.innerHTML
 * @param {Object} options.attributes Attributes for HTML element
 * @param {Array} options.childElements
 * @param {Array} options.eventsListeners
 * @returns {HTMLElement}
 */
export function createElAndAtt(el, options = false) {
  const element = document.createElement(el);

  if (options) {
    if (options.attributes) {
      Object.entries(options.attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }
    if (options.innerHTML) {
      element.innerHTML = options.innerHTML;
    }
    if (options.childElements) {
      options.childElements.forEach((htmlElement) => {
        if (!htmlElement) return;
        element.appendChild(htmlElement);
      });
    }
    if (options.eventsListeners) {
      Object.entries(options.eventsListeners).forEach(
        ([eventListenerName, eventListener]) => {
          element.addEventListener(eventListenerName, eventListener);
        }
      );
    }
  }

  return element;
}

/**
 *
 * @param {String} classToRemove
 * @param {String} classToAdd
 * @param {HTMLElement} el
 */
export function replaceClass(classToRemove, classToAdd, el) {
  el.classList.remove(classToRemove);
  el.classList.add(classToAdd);
}

/**
 *
 * @param {HTMLElement} elToRemove
 * @param {HTMLElement} elToReceive
 * @param {String} classToSwap
 */
export function swapClass(elToRemove, elToReceive, classToSwap) {
  elToRemove.classList.remove(classToSwap);
  elToReceive.classList.add(classToSwap);
}

/**
 * apply styles on element
 *
 * @param {HTMLElement} el
 * @param {object} styleObj
 */
export const applyStyles = (el, styleObj) => {
  Object.entries(styleObj).forEach(([key, value]) => {
    el.style[key] = [value];
  });
};
