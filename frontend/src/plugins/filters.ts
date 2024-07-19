// src/plugins/filters.ts

import { App } from 'vue';
import { BASE_URL } from '@/configurations/HttpConfiguration';

export default {
  install(app: App) {
    app.config.globalProperties.$truncate = (value: string = "", maxLength: number = 0) => {
      if (value.length > maxLength) {
        return value.substring(0, maxLength) + '...';
      }
      return value;
    };
    app.config.globalProperties.$numberFormat = (value: number = 0) => {
      if (Number.isInteger(value)) {
        return value.toLocaleString();
      } else {
        return value.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      }
    };
    app.config.globalProperties.$serverLinkFormat = (link: string = "") => {
      return BASE_URL + link;
    };
  }
};