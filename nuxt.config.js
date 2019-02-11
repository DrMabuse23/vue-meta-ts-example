/* tslint:disable */
export default {
  hooks: {
    listen() {
      if (process.send) {
        process.send("ready");
      }
    }
  }
};
/* tslint:enable */
