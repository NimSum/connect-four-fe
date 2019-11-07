# Connect 4 Friends(FE)
* You can view this app live at: https://nimsum.github.io/connect-four-fe/
* Checkout the backend API for this app at: https://github.com/NimSum/connect-four-be

This app was created for anyone to play and chat connect four with their friends and other users! It features account creation/login/anonymous login to tailor user login preferences. It also has a world chat feature and it allows users to create a public/private game room for them to play Connect 4 and chat!

## Table of contents
* [Screenshots](#Screenshots)
* [Getting Started](#Getting-Started)
* [How to Use](#How-to-Use)
* [Project Emphasis](#Project-Emphasis)
* [UI Design](#UI-Design)
* [Future Plans](#Future-Plans)

## Screenshots
#### Login:
![Login Gif](https://user-images.githubusercontent.com/22114952/68421983-ec3d0200-0164-11ea-83f5-576acf12b13f.gif)
#### Home Page:
![Home Page Gif](https://user-images.githubusercontent.com/22114952/68422003-f3fca680-0164-11ea-9851-3358c95d82ea.gif)
#### Game Page:
![In Game Gif](https://user-images.githubusercontent.com/22114952/68421991-efd08900-0164-11ea-862e-2a258bc82d9f.gif)

## Getting Started

If you'd like to clone this repository to your own local machine, run the following commands in your terminal:

```shell
https://github.com/NimSum/connect-four-fe.git
```

Then for each repo, run the following command to install dependencies:

```shell
npm install
```

To view the app in action, run the following command in your terminal for the front-end:

```bash
npm start
```

Then, go to `http://localhost:3000/` in your browser to see the code running in the browser.  

---

## How to Use
#### Login:
If you already have an account, simply login with your email and password. If you would like to create an account, click "Create account and fill in the forms, please try not to forget your secret phrases or save them as they are needed to retrieve your account in case of you forget your password.

For anonymous login, simply click "Anonymous Login" and type in a 3-15 character name then login. Please note that you will not be able to recieve access to the other features of the app that requires a user account.

#### Connect 4 Game Rooms:
##### New Room Creation
1. Click 'New Room' located on the top right corner of "Available Rooms Box".
2. A dialog will appear, type in a 3-35 character Room Name (Password is optional) and then click "Create".
3. Once created, you will be placed in a game "room" where you will wait for your opponents to join.
Note: You can easily leave the game room and join other rooms.

##### Join Game Room
1. If there are rooms available, click the "Join" button on the Room Card
For Locked Rooms:
2. A lock icon appears for rooms that are private and REQUIRES a password to join
3. To join a locked room, click the "Join" button and a password input will appear. Type the password then click "Join" again.

##### In Game Room
1. Select a color for your chip. This step is optional because if you do not select, it will randomly choose a color for you.
2. Press "Ready?" button.
3. Once you and your opponent are ready, the game will begin and the app will bring you to the game!

##### Playing Connect 4
Once you're in a game, a random player will be selected to go first!.
1. If it's your to "chip" in... ha! it will indicate on the top of the connect 4 grid and the bottom slot will be bright white else it will be your opponent and the bottom slot will be grayed out.
2. To place your "chip" click the "+" button in the middle of the chip.
3. Play until someone loses! 
4. When a player wins, the waiting room re-appears and you have the option for a rematch!
5. Your stats are updated automatically if you are signed in with an account.
Note: Leaving a match automatically forfeits the game. 

## UI Design

To give myself a better understanding of how the layout and UI/UX would be, I created a simple Figma wireframe for the login, home, and active game pages. This gave me guidance as to how I would develop the UI/UX. 

![Wireframe](https://user-images.githubusercontent.com/22114952/67022161-65958780-f0c6-11e9-834d-b6a3d33431e2.png)


## Future Plans
- Improve smaller device UI
- Friends
- Custom Friends Chat 
- Achievements
- Invite Player to hidden room
- Emojis(What kind of chat app has no emojis these days?)

## Project Emphasis
I created this app to challenge myself to learn new technologies such as Material UI and Socket.io(client). The complexity of the front-end allowed me to dive deeper into more complex Redux state management. I also gained a deeper understanding of the new React hooks API such as useEffect(different lifecycles), useState, useRef, and useCallback.

### Front-End
- [x] Material UI
- [x] UI design
- [x] React w/ Redux & Router
- [x] Javascript(Async, ES6)
- [x] Socket.io
- [x] Enzyme & Jest testing

### Back-end
- [x] TypeScript
- [x] Node.js/Express
- [x] Mocha
- [x] Socket.io
- [x] MongoDb
- [x] Mongoose
- [x] JWT Authentication
- [x] Express Middleware
- [x] AWS(EC2)

