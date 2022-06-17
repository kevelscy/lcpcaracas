export interface ITopicOfTheMonthProps {
  topicOfTheMonth: {
    mobile: string[]
     desktop: string[]
  }
}

export interface ISliderProps {
  topicOfTheMonth: { mobile: string[], desktop: string[] },
  events: { mobile: string[], desktop: string[] }
}
