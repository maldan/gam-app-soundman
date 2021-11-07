import Axios from 'axios';
import Moment from 'moment';
import { ActionContext } from 'vuex';
import { MainTree } from '.';

export type MainStore = {
  API_URL: string;
  blocks: any[];
};
export type MainActionContext = ActionContext<MainStore, MainTree>;

export default {
  namespaced: true,
  state: {
    API_URL: process.env.VUE_APP_API_URL || `${window.location.origin}/api`,
    blocks: [
      {
        type: 'block-notes',
        left: '20px',
        top: '100px',
        octave: 5,
        time: 0,
        notes: [
          { note: 0, start: 0, length: 0.5 },
          { note: 1, start: 0.5, length: 0.5 },
          { note: 2, start: 1.0, length: 0.5 },
          { note: 3, start: 1.5, length: 0.5 },

          { note: 0, start: 2, length: 0.5 },
          { note: 1, start: 2.5, length: 0.5 },
          { note: 2, start: 3.0, length: 0.5 },
          { note: 3, start: 3.5, length: 0.5 },

          /*{ note: 4, start: 4, length: 1 },
          { note: 5, start: 5, length: 1 },
          { note: 6, start: 6, length: 1 },
          { note: 7, start: 7, length: 1 },
          { note: 8, start: 7, length: 1 },
          { note: 9, start: 7, length: 1 },
          { note: 10, start: 7, length: 1 },
          { note: 11, start: 7, length: 1 },*/
        ],
      },
      {
        type: 'block-notes',
        left: '420px',
        top: '200px',
        octave: 3,
        time: 0,
        notes: [
          { note: 0, start: 0, length: 1 },
          { note: 1, start: 1, length: 2 },
          { note: 2, start: 3, length: 1 },
          { note: 3, start: 3, length: 1 },

          { note: 4, start: 4, length: 1 },
          { note: 5, start: 5, length: 1 },
          { note: 6, start: 6, length: 1 },
          { note: 7, start: 7, length: 1 },
          { note: 8, start: 7, length: 1 },
          { note: 9, start: 7, length: 1 },
          { note: 10, start: 7, length: 1 },
          { note: 11, start: 7, length: 1 },
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
};
