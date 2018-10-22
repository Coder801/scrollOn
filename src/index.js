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

export default class ScrollOn {
  constructor(options) {
    this.option = Object.assign(defaults, options);
    this.listener = this.listener.bind(this);
    this.scrollTop = 0;
    this.elementTop = this.getElementTop(this.option.element);
    if (this.elementTop) {
      this.recountScroll(this.option.parent);
      this.init();
    }
  }

  recountScroll(parent) {
    this.scrollTop = Math.round(parent.pageYOffset) + this.option.offset;
  }

  getElementTop(element) {
    const elementNode = document.querySelector(element);
    if (elementNode) {
      return Math.round(elementNode.getBoundingClientRect().top);
    }
    return false;
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
