import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  //state:コンポーネントでいうdata
  //statuをskillcategoriesと定義
  state: {
    skillCategories: [],
    loaded: false
  },

  //getters:コンポーネントでいうcomputed的なもの
  //gettersを
  getters: {
    skillName: (state) => {
      const skillNameArray =[]
      if(state.skillCategories[2]){
        /* eslint-disable no-debugger */
        debugger
        state.skillCategories[2].skill.forEach((names) => {
          skillNameArray.push(names.name)
        })
      }
      return skillNameArray
    },
    skillScore: (state) => {
      const skillScoreArray =[]
      if(state.skillCategories[2]){
        /* eslint-disable no-debugger */
        debugger
        state.skillCategories[2].skill.forEach((scores) => {
          skillScoreArray.push(scores.score)
        })
      }
      return skillScoreArray
    },
    skillNameB: (state) => {
      const skillNameArray =[]
      if(state.skillCategories[0]){
        /* eslint-disable no-debugger */
        debugger
        state.skillCategories[0].skill.forEach((names) => {
          skillNameArray.push(names.name)
        })
      }
      return skillNameArray
    },
    skillScoreB: (state) => {
      const skillScoreArray =[]
      if(state.skillCategories[0]){
        /* eslint-disable no-debugger */
        debugger
        state.skillCategories[0].skill.forEach((scores) => {
          skillScoreArray.push(scores.score)
        })
      }
      return skillScoreArray
    },
    skillNameD: (state) => {
      const skillNameArray =[]
      if(state.skillCategories[1]){
        /* eslint-disable no-debugger */
        debugger
        state.skillCategories[1].skill.forEach((names) => {
          skillNameArray.push(names.name)
        })
      }
      return skillNameArray
    },
    skillScoreD: (state) => {
      const skillScoreArray =[]
      if(state.skillCategories[1]){
        /* eslint-disable no-debugger */
        debugger
        state.skillCategories[1].skill.forEach((scores) => {
          skillScoreArray.push(scores.score)
        })
      }
      return skillScoreArray
    },
    // skillBackgroundColorD: (state) => {
    //   const skillBGArray =[]
    //   if(state.skillCategories[1]){
    //     /* eslint-disable no-debugger */
    //     debugger
    //     state.skillCategories[1].skill.forEach((backgroundColors) => {
    //       skillBGArray.push(backgroundColors.backgroundColor)
    //     })
    //   }
    //   return skillBGArray
    // },
  },

  //mutations:コンポーネントでいうmethod（と言うかsetter）
  //stateを唯一変更できるもの
  mutations: {
    //vuexでは引数をpayloadと呼ぶっぽい
    //payloadはオブジェクトにするべき（いっぱい入れれるし）
    setSkillCategories(state, payload) {
      state.skillCategories = payload.skillCategories;
      state.loaded = true
    },
  },

  //actionのコミットを使うことでミューテーションを呼び出す（コンポーネントには無い概念）
  actions: {
    async updataSkillCategories({commit}) {
      //skillCategoriesの定義
      const skillCategories = [];
      //持ってくるAPIの指定？
      const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skills';
      const res = await axios.get(functionsUrl);
      //res.dataでデータを取得
      res.data.forEach((category) =>{
        skillCategories.push(category);
      });
      commit('setSkillCategories', {skillCategories});
    },
  },
});





