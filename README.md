## TempoRun

#Inspiration

Exercising to maintain health is an important, yet difficult lifestyle to uphold. One of the best form of cardio is running, yet it is so hard to keep going sometimes! Sometimes, the perfect, catchy songs turns on just as you're about to finish. You feel this wave of adrenaline and all of the sudden you're running for another 5 minutes! This exact scenario is not uncommon among long distance runners, and we're inspired to help keep you going.

#What it does

TempoRun personalizes your music by altering the beats per minute (BPM) to match with your running cadence. Each step you take is picked up by your phone, and our app calculates the perfect way to match the music so that each step you take lands on a beat. Instead of running, you'll be dancing!

#How we built it

Using React Native, we replicated the Spotify user interface by taking advantage of a template and remodeling it to be current and suitable for our app. We used Android Studio as a medium to virtually deploy our app. With local .mp3 files, we were able to stream songs through the app and modify the speed at which it was playing. We used the expo-sensors package to count the steps of users, calculates the step strides, and find the ratio to modify the BPM of the song being played in real-time. We used GitHub as a version control for all our source code.

#Challenges we ran into

Of the 4 team members in our team, 3 of us were using Mac computers. However, 2 of those 3 were unable to install xcode to test the application on iOS. Focusing on the Android deployment first, we then did not prioritize deploying on iOS as to get as many features out as possible. 1 of our team members was unable to resolve gradle issues, even with mentor help. Then, lots of the code available to us were outdated and required refactoring, and some were unusable at all and costed us smooth features.

#Accomplishments that we're proud of

We were able to develop a beautiful functioning app that can be deployed on a physical mobile device. The main features we needed all exist and we learned so much through the entire process.

#What we learned

All of us were new to mobile development and React Native. We were able to learn a lot about how the application works and is integrated with each other. We developed our 'git' skills and learned to collaborate and delegate tasks as needed.

#What's next for TempoRun

We would like to finalize the application to allow for a smooth user experience. We would also like to integrate more features of a music player and sync to a music streaming app so that music does not have to be uploaded to our app. We would also like to successfully deploy on the iOS version, and further the application to analyze other data collected from our sensor to track sport activity and user's health.

Created by Alina Chaiyasarikul, Wentao Li, Vee Zhu, John Chaiyasarikul
