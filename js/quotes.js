const quotes = [
  {
    quote: '자신을 믿고 열심히 하라.',
    author: 'RM (방탄소년단)',
  },
  {
    quote: '아무리 힘든 여정일지라도 인내하면 결국 목표에 도달할 것이다.',
    author: '이민호',
  },
  {
    quote: '꿈을 포기하지 말고, 꿈을 이룰 수 없다는 말을 아무도 못하게 하라.',
    author: '박신혜',
  },
  {
    quote: '가장 중요한 것은 긍정적인 태도를 갖고 절대 포기하지 않는 것이다.',
    author: '아이유',
  },
  {
    quote: '실패를 두려워하지 말라, 실패는 성공의 일부이기 때문이다.',
    author: '강다니엘',
  },
  {
    quote: '과거는 바꿀 수 없지만 미래는 바꿀 수 있다.',
    author: '김수현',
  },
  {
    quote: '행복은 선택이니 행복하기를 선택하라.',
    author: '이준기',
  },
  {
    quote: '성공은 행복의 열쇠가 아니라 행복이 성공의 열쇠다.',
    author: '송중기',
  },
  {
    quote: '겸손하고 열심히 일해라, 그러면 성공이 너에게 올 것이다.',
    author: '배수지',
  },
  {
    quote: '자신을 믿어라, 그러면 무엇이든 가능하다.',
    author: '현빈',
  },
  {
    quote: '기회를 기다리지 말고, 기회를 만들어라.',
    author: '공유',
  },
  {
    quote: '자신을 제한할 수 있는 사람은 당신뿐이다.',
    author: '박서준',
  },
  {
    quote: '당신의 미래를 예측하는 가장 좋은 방법은 그것을 만드는 것이다.',
    author: '김우빈',
  },
  {
    quote:
      '행복은 이미 만들어진 것이 아닙니다. 그것은 당신 자신의 행동에서 비롯된다.',
    author: '박보검',
  },
  {
    quote: '목적지보다 여행이 더 중요하다.',
    author: '아이유',
  },
  {
    quote: '중요하지 않은 것에 시간을 낭비하기에는 인생은 너무 짧다.',
    author: '이민호',
  },
  {
    quote:
      '성공은 여러분이 얼마나 많은 것을 성취하느냐가 아니라, 여러분이 얼마나 많은 것을 성취하도록 다른 사람들에게 영감을 주느냐에 달려 있다.',
    author: '방탄소년단',
  },
  {
    quote:
      '두려움이 당신을 방해하지 말고, 믿음의 도약을 하고 그것이 당신을 어디로 데려갈지 보라.',
    author: '김소현',
  },
  {
    quote:
      '당신이 원하는 것이 있다면, 그것을 위해 열심히 노력하라. 그러면 그것이 당신에게 올 것이다.',
    author: '수지',
  },
  {
    quote:
      '도전은 삶을 흥미롭게 만들고, 도전을 극복하는 것은 삶을 의미 있게 만든다.',
    author: '이준기',
  },
  {
    quote:
      '행복은 모든 것을 갖는 것이 아니라, 당신이 가진 것에서 만족감을 찾는 것이다.',
    author: '송혜교',
  },
  {
    quote: '세상에서 보고 싶은 변화가 되어라.',
    author: '박해진',
  },
  {
    quote: '성공은 목적지가 아니라 여행이다.',
    author: '이승기',
  },
  {
    quote: '행복은 미래를 위해 미루는 것이 아니라 현재를 위해 설계하는 것이다.',
    author: '김남주',
  },
  {
    quote: '사랑하는 일을 하면 성공이 따라온다.',
    author: '유재석',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `- ${todaysQuote.author}`;
