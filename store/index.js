export const state = () => ({
  modal: null,
});

export const mutations = {
  setModal(state, modal) {
    state.modal = modal;
  },
};

export const getters = {
  modal: (state) => state.modal,
};