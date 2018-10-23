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

class ScrollOn {
  constructor(options) {
    this.option = Object.assign(defaults, options);
    this.listener = this.listener.bind(this);
    this.scrollTop = 0;
    this.elementTop = this.getElementTop(this.option.element);
    this.changeEvent = new Event('changeEvent');
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

  cancelableFunction() {
    const bufferFunc = func;
    const wrapper = (...args) => {
      if (func) return func.apply(this, args);
    };

    wrapper.cancel = () => {
      func = null;
    };

    wrapper.reload = () => {
      func = bufferFunc;
    };

    return wrapper;
  }

  listener() {
    this.recountScroll(this.option.parent);
    if (this.scrollTop >= this.elementTop) {
      this.option.scrollIn();
    } else {
      this.option.scrollOut();
    }
  }

  init() {
    document.addEventListener('scroll', this.listener);
  }

  destroy() {
    document.removeEventListener('scroll', this.listener);
  }
}
