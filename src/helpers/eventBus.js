class EventBus {
  constructor() {
    if (process.isClient) {
      this.bus = document.createElement('eventbusproxy');
    }
  }

  addEventListener(event, callback) {
    if (process.isClient) {
      this.bus.addEventListener(event, callback);
    }
  }

  removeEventListener(event, callback) {
    if (process.isClient) {
      this.bus.removeEventListener(event, callback);
    }
  }

  dispatchEvent(event, detail = {}) {
    if (process.isClient) {
      this.bus.dispatchEvent(new CustomEvent(event, {
        detail
      }));
    }
  }
}

const bus = new EventBus();

const names = {
  toggleMenu: 'toggle-menu'
};

export default {
  bus,
  names
};
