# Twitter-Algorithm-Calculator
Twitter algorithm weight calculator. Twitter 演算法权重计算器。

More articles and online calculators on algorithms.

[Twitter Algorithm and Push Mechanism 2023 Update](https://dev-coco.github.io/post/Twitter-Algorithm-EN/)

[推特 Twitter 演算法和推送机制 2023 最新](https://dev-coco.github.io/post/Twitter-Algorithm/)

# Usage
## Post Score Calculate
```JavaScript
const data = {
  like: 5,
  reply: 10,
  retweet: 1,
  profileVisits: 4,
  videoViews: 17
}

postScore(data)

>> 151.585
```

## Calculate age from date
```JavaScript
const data = {
  accountStatus: 'unVerified',
  restricted: false,
  birthday: '1981/6/3',
  followings: 512,
  followers: 1329
}
calcAccountWeight(data)

>> 55.00000000000001
```

## Calculate post weight
```JavaScript
calcPostWeight('2023-5-2 23:00:00')

>> 0.9122048147790982
```
