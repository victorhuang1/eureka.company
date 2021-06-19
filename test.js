const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true});
BlogPost.create({
    title:'Bruce Harris (journalist)',
    body:'Life and career :Bruce Harris was born in Ireland and trained as a journalist in England in Middlesbrough and Birmingham before joining the Evening Standard in London in 1920 and turning his attention to sport.',
    tag:'JAVA'
},(error,blogpost)=>{
    console.log(error,blogpost)
})

BlogPost.create({
    title:'Skill development(Programmer) - Why do some people keep changing jobs?',
    body: 'Recently, many students are asking me why most people change their jobs all the time. Is it true that the company is not good? Or why? Today we are going to talk about it. From the big data of social dimission, in fact, most partners break up with the company because of these three reasons, the company is stupid, the boss is stupid, and the colleagues are stupid, but these are internal dimission problems, in fact, there is also an external dimission problem. As is known to all, when we choose a job generally look at these three points, salary, distance, the environment, these are the company\'s external issues, usually we when selecting work according to their proportion of the three choices will be very good choice, such as total score I give 10 points, the salary of 8 points, from 1 minute, e6nvironment 1 minute, So as long as the salary reaches the position other dispensable go on a business trip every day does not matter, what I want is money, or my environment 5 minutes, distance 4 minutes, salary 1 minutes, so you must be a person who pays attention to the quality of working life, perhaps salary is not so important, maybe we still have other pursuits besides the job So we may wish to give yourself such a proportion of planning before really looking for a job, at least to find a relative in line with their expectations in the external company, because the in the mind is expected to require the quality of life and work of partners, even if you give more money will do unhappy. But the problem is from the new and the old distinction, because the couple phase value is to be able to survive in the company, more is not special requirements for these three, and even some friend do not need to pay so high, the environment also do not need so good, just learning experience, so as a newcomer "survival" is very important, Because of the possibility of their own because of a variety of unsuitable resignation. Because in the new job in a variety of "first time" there will be extreme discomfort. The "first" interview will be running around downstairs afraid to enter the company. "The first time" I joined the company, I felt the company environment was extremely depressed, and I felt the burden in my heart became larger. I don\'t know a lot about my first assignment, but I\'m afraid to ask other busy colleagues. \"For the first time\" talk with the leader nervous of dying, always afraid to say wrong words, reduce the good impression to my leadership... Perhaps for the extreme introverted new people, in more than expected in the heart after the "first time" too much, escape is the best way to hide from reality, so in the new area, most of the reason is due to the "first time" too much more introverted do not adapt to the social environment caused by. Society for our responsibility, of course, it is necessary to find a job of social responsibilities, or even look down on disease, because there is no social security card, so we have to continue to look for a job again, forcing himself to adapt to their own does not adapt, but after a part of the "first", a lot of new people will adapt to the social rhythm, and gradually found their own direction, At this point there will be an internal breakup problem, the company is stupid, the boss is stupid, the colleague is stupid. These three points are unpredictable, even himself can\'t or so, but this time will be on their own powerful emotional intelligence to dominate in the workplace, some high eq, for colleagues, boss get along better, which is flattering to all eat, some people may be ordinary but because of lack of recognition is ordinary, However, there will be students who want to find Bole, so the best way is to go to another company to find Bole. In a word, everyone wants to find the end result they want, and they are not willing to change jobs all the time. However, most people in this society are not satisfied, and most people do not work because they like work, and there are very few people who are really interested in work, which leads to this social phenomenon. I still hope you can find your favorite job as soon as possible and stay stable for a long time, so that you can gradually find the direction of life. (◐ ‿ ◑)',
    tag:'Web Design'
},(error,blogpost)=>{
    console.log(error,blogpost)
})