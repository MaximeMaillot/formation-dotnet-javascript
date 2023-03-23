/**
 * Append a child of type childType to the parent Element with options
 * @param {Element} parent element you want to append a child to
 * @param {string} childType type of the child Element
 * @param {Object} options choose the options you want to add to that element
 * {
 * 'id' @type {string} to set a specific id to the element
 * 'text' @type {string} to add an innerHTML
 * 'style' @type {string} to add inline style to the element
 * 'className' @type {Array} array of string to add classes
 * 'placeholder' @type {string} string in the placeholder
 * 'type' @type {string} inline type of the element
 * 'name' @type {string} inline name of the element
 * 'alert' @type {string} to transform the element into an alert with 'alert' as the danger level
 * 'eventHandler' @type {Object} add an event to the element
 *    {
 *      'event' @type {string} Type of the event
 *      'fn' @type {function} Name of the function
 *      'parameters' @type {Array} List of parameters
 *    }
 *  }
 * @returns {Element}
 */
function appendChildToElement(parent, childType, options = {}) {
    let child = document.createElement(childType);
    if ("id" in options && options.id != null) {
        child.setAttribute("id", options.id);
    }
    if ("text" in options && options.text != null) {
        child.innerHTML = options.text;
    }
    if ("style" in options && options.style != null) {
        child.style.cssText = options.style
    }
    if ("className" in options && options.className.length > 0) {
        child.classList.add(...options.className)
    }
    if ("placeholder" in options && options.placeholder != null) {
        child.setAttribute("placeholder", options.placeholder)
    }
    if ("type" in options && options.type != null) {
        child.setAttribute("type", options.type)
    }
    if ("name" in options && options.name != null) {
        child.setAttribute("name", options.name)
    }
    if ("alert" in options && options.alert != null) {
        let alertClass = []
        alertClass.push("alert")
        switch (options.alert) {
            case "danger":
                alertClass.push("alert-danger")
                break;
            default:
                alertClass.push("alert-info")
                break;
        }
        child.classList.add(...alertClass)
        parent.insertBefore(child, parent.firstChild);
        return child
    }
    if ("eventHandler" in options && options.eventHandler != null) {
        if (typeof options.eventHandler.event == "Array") {
            options.event.forEach((e) => {
                addEvent(child, e.event, options.evenHandler.fn)
            })
        } else {
            addEvent(child, options.eventHandler.event, options.eventHandler.fn)
        }
    }
    parent.appendChild(child);
    return child
}

function addEvent(child, event, fn) {
    switch (event) {
        case "onclick":
            child.addEventListener("click", function (e) {
                fn()
            })
            break;
        case "keyup":
            child.addEventListener("keyup", function (e) {
                if (e.key === "Enter") {
                    fn()
                }
            });
            break;
        default:
            break;
    }
}

function removeAllChild(parent) {
    while (parent.lastElementChild) {
        parent.removeChild(parent.lastElementChild);
    }
}

export { appendChildToElement, removeAllChild }