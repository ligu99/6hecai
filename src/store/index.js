import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sxArr: [{
      id: "1",
      name: "鼠",
      color: "红",
      season: "冬",
      skill: "棋",
      codeArr: [{ number: '2', color: '红' },
      { number: '14', color: '蓝' },
      { number: '26', color: '蓝' },
      { number: '38', color: '绿' }],
    }, {
      id: "2",
      name: "牛",
      color: "绿",
      season: "冬",
      skill: "棋",
      codeArr: [{ number: '1', color: '红' },
      { number: '13', color: '红' },
      { number: '25', color: '蓝' },
      { number: '37', color: '蓝' },
      { number: '49', color: '绿' }],
    }, {
      id: "3",
      name: "虎",
      color: "蓝",
      season: "春",
      skill: "书",
      codeArr: [{ number: '12', color: '红' },
      { number: '24', color: '红' },
      { number: '36', color: '蓝' },
      { number: '48', color: '蓝' }],
    }, {
      id: "4",
      name: "兔",
      color: "红",
      season: "春",
      skill: "琴",
      codeArr: [{ number: '11', color: '绿' },
      { number: '23', color: '红' },
      { number: '35', color: '红' },
      { number: '47', color: '蓝' }],
    }, {
      id: "5",
      name: "龙",
      color: "绿",
      season: "春",
      skill: "书",
      codeArr: [{ number: '10', color: '蓝' },
      { number: '22', color: '绿' },
      { number: '34', color: '红' },
      { number: '46', color: '红' }],
    }, {
      id: "6",
      name: "蛇",
      color: "蓝",
      season: "夏",
      skill: "琴",
      codeArr: [{ number: '9', color: '蓝' },
      { number: '21', color: '绿' },
      { number: '33', color: '绿' },
      { number: '45', color: '红' }],
    }, {
      id: "7",
      name: "马",
      color: "红",
      season: "夏",
      skill: "书",
      codeArr: [{ number: '8', color: '红' },
      { number: '20', color: '蓝' },
      { number: '32', color: '绿' },
      { number: '44', color: '绿' }],
    }, {
      id: "8",
      name: "羊",
      color: "绿",
      season: "夏",
      skill: "画",
      codeArr: [{ number: '7', color: '红' },
      { number: '19', color: '红' },
      { number: '31', color: '蓝' },
      { number: '43', color: '绿' }],
    }, {
      id: "9",
      name: "猴",
      color: "蓝",
      season: "秋",
      skill: "画",
      codeArr: [{ number: '6', color: '绿' },
      { number: '18', color: '红' },
      { number: '30', color: '红' },
      { number: '42', color: '蓝' }],
    }, {
      id: "10",
      name: "鸡",
      color: "红",
      season: "秋",
      skill: "琴",
      codeArr: [{ number: '5', color: '绿' },
      { number: '17', color: '绿' },
      { number: '29', color: '红' },
      { number: '41', color: '蓝' }],
    }, {
      id: "11",
      name: "狗",
      color: "绿",
      season: "秋",
      skill: "棋",
      codeArr: [{ number: '4', color: '蓝' },
      { number: '16', color: '绿' },
      { number: '28', color: '绿' },
      { number: '40', color: '红' }],
    }, {
      id: "12",
      name: "猪",
      color: "蓝",
      season: "冬",
      skill: "画",
      codeArr: [{ number: '3', color: '蓝' },
      { number: '15', color: '蓝' },
      { number: '27', color: '绿' },
      { number: '39', color: '绿' }],
    }],
    nextTime: "/"
  },
  mutations: {
    setNextTime(state, value) {
      state.nextTime = value
    }
  },
  actions: {
  },
  modules: {
  }
})
