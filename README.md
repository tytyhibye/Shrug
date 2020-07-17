# Shrug

#### By Tyler Bates
<hr/>

## Description

A React Web application for a restuarant suggestion generator. <br>
The user signs in and is prompted to input their price range and zip code. The application will then return an restaurant within the parameters of the user inputs. 
<hr />

## Component Diagrams
### App Design
<img src='./public/component-diagram.drawio.png'>

### Card Design
<img src='./public/card-diagram.drawio.png'>

<hr/>

## Logistics

|||
|-----|-----|
| :ballot_box_with_check: |User can register|
| :ballot_box_with_check: |User can log in with registered email and password|
| :ballot_box_with_check: |User can log out from navigation menu|
| :ballot_box_with_check: |User can access the projects github repository from navigation menu|
| :ballot_box: |User can input preferred price range and zip code|
| :ballot_box: |Results card will output random restaurant within parameters|
| :ballot_box: |Results card will include GoogleMap pinned location of restaurant|
| :ballot_box: |User can re-roll if not satisfied with output restaurant|

<hr />


## Setup/Installation Requirements

1. Clone this projects repository into your local directory following [these](https://www.linode.com/docs/development/version-control/how-to-install-git-and-clone-a-github-repository/) instructions.

2. Open the now local project folder with [VSC](https://code.visualstudio.com/Download) or an equivalent

3. Navigate to the project directory from your terminal by entering the following:

```
$ cd ~/quiz-of-choice
```
4. Within the projects directory install all required dependencies with
```
$ npm install
```
5. Run the application to view in your browser with
```
$ npm run start
```

>If the browser does not automatically launch, view the project [here](https://localhost:3000)

<hr/>

## Known Bugs

### There are no known bugs at this time
If you have a bug or an idea, browse the open issues before opening a new one. You can also take a look at the [Open Source Guide](https://opensource.guide/).

<hr/>

## Technologies Used

- JavaScript
- React
- Firebase
- Firestore
- Yelp Api
- Google Api
- Puppeteer
- Redux
- Reactstrap
- Bootstrap
- HTML
- CSS
- Git

<hr/>

## Legal

#### Apache License V2.0

Copyright 2020 Tyler Bates, DJ Zevenbergen & Khansahab Khakwan @ Epicodus

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.