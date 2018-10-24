const defaults = {
  parent: window,
  element: null,
  offset: 0,
  scrollIn: function () {
    console.info('Scroll in element');
  },
  scrollOut: function () {
    console.info('Scroll out element');
  }
};

class ToggleFunctionManager {
  constructor(...callbacks) {
    this.cache = null;
    this.callbacks = callbacks.map(callback => {
      return {
        called: false,
        name: callback.name,
        callback
      };
    });
  }

  call(func) {
    if (func && func.name && func.name !== this.cache) {
      const callback = this.callbacks.find(item => item.name === func.name);
      if (!callback.called) {
        this.callbacks.forEach(item => {
          item.called = false;
        });
        callback.callback();
        callback.called = true;
        this.cache = callback.name;
      }
    }
  }
}

class ScrollOn {
  constructor(options) {
    this.option = Object.assign(defaults, options);
    this.listener = this.listener.bind(this);
    this.scrollTop = 0;
    this.elementTop = this.getElementTop(this.option.element);
    this.toggleFunctionManager = new ToggleFunctionManager(this.option.scrollIn, this.option.scrollOut);
    if (this.elementTop) {
      this.recountScroll(this.option.parent);
      this.init();
    }
  }

  getTopCordinats(element) {
    const box = element.getBoundingClientRect();
    const body = document.body;
    const documentElement = document.documentElement;
    const scrollTop = window.pageYOffset || documentElement.scrollTop || body.scrollTop;
    const clientTop = documentElement.clientTop || body.clientTop || 0;
    const top = box.top + scrollTop - clientTop;

    return Math.round(top);
  }

  recountScroll(parent) {
    this.scrollTop = Math.round(parent.pageYOffset) + this.option.offset;
  }

  getElementTop(element) {
    const elementNode = document.querySelector(element);
    if (elementNode) {
      return Math.round(this.getTopCordinats(elementNode));
    }
    return false;
  }

  listener() {
    this.recountScroll(this.option.parent);
    if (this.scrollTop >= this.elementTop) {
      this.toggleFunctionManager.call(this.option.scrollIn);
    } else {
      this.toggleFunctionManager.call(this.option.scrollOut);
    }
  }

  init() {
    document.addEventListener('scroll', this.listener);
  }

  destroy() {
    document.removeEventListener('scroll', this.listener);
  }
}
