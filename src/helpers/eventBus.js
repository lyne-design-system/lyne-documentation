class EventBus {
  constructor() {
    if (process.isClient) {
      this.bus = document.createElement('eventbusproxy');
    }
  }

  addEventListener(event, callback) {
    this.bus.addEventListener(event, callback);
  }

  removeEventListener(event, callback) {
    this.bus.removeEventListener(event, callback);
  }

  dispatchEvent(event, detail = {}) {
    this.bus.dispatchEvent(new CustomEvent(event, {
      detail
    }));
  }
}

const eventBus = new EventBus();

export default eventBus;
