# Rancid Tomatillos
Rancid Tomatillos is a site that lets users browse movies, and view fun details about each one like their budget, a plot summary, and user community ratings. It's designed for a fluid and accessible experience for users of varying levels of ability and internet literacy. It's currently deployed [here](https://rancid-tomatillos.vercel.app/), but we would like to note that there is a [small visual bug](https://github.com/thaomonster/rancid-tomatillos/issues/37) in the deployed version, and for now running the site on a local machine is a better experience. 
 
Rancid Tomatillos is a completely original concept that in no way resembles [another site](https://www.rottentomatoes.com/). If it did resemble another site it would do so purely for parody purposes. 

## Technologies
This app is built in `React` using the `create-react-app` boilerplate. It also uses... 

-`react-router-dom`

-`react-promise-tracker`

-`react-spinners`

-`react-youtube`

-`node-sass`

-`fetch api`

-`HTML5`

-`cypress`

## Installation
To install this app: 
```
git clone <<url>>
cd <<path>>
npm i
```

Once all the dependancies are installed run `npm start` and the site should be accessible at `http://localhost:3000/`.
## Features 
Upon page load the site will fetch a list of movies and display a grid of posters. Each movie's title and freshness rating are visible. The user can click a poster to see a more detailed page including a plot summary, various stats, and a list of embedded trailers and clips from youtube. 
<p style="text-align: center;">
  
![A user navigates the site](https://media.giphy.com/media/bvE9o6EybVBbg82Rys/giphy.gif)
</p>

The user can also enter text into a search bar to filter the movies by title, and choose to sort the movies by freshness, release date, or title. 
<p style="text-align: center;">
  
![A users searches for a movie](https://media.giphy.com/media/oTXHh6rP6VF9agH5n3/giphy.gif)
![A user filters their results](https://media.giphy.com/media/fbtELrIDWxHEJGpIeN/giphy.gif)
</p>

Rancid Tomatillos is completely responsive across all breakpoints, and is designed to work well on mobile. 
<p style="text-align: center;">
  
![A mobile user navigates the site](https://media.giphy.com/media/nr9Rsoa7zbezoKsnMt/giphy.gif)
</p>

## Testing 
We use [cypress](https://www.cypress.io/) for end to end and integration testing. In order to test the site run `npm run cypress` and you should be brought to a testing suite. The tests use stubbed api calls, but do expect the site to run locally. Make sure you've run `npm start` in an open tab and can visit the site before testing. 

## Future Iterations
We aren't sure if we will be updating this project. If we can solve [That One Bug](https://github.com/thaomonster/rancid-tomatillos/issues/37) we almost certainly will. Whether or not we continue this work here are some improvements that could be made: 

-Right now there is no login system for users, or a system by which users can add their own ratings. This should be pretty easy to implement didn't have the time so it fell out of the scope for this project. 

-Some movies have incomplete data, and a couple image urls we get back from the server are bad. Although ideally the data we get would always be good, we can also handle a lot of these inconsistences on our end with some conditional rendering and data cleaning. 

-Although we're proud of our testing suite we could go further and get more robust tests by using the React Testing Library. 

## Contributors 
This app was a paired project for Module 3 of the Front End Engineering Program at [the Turing School of Software and Design](https://turing.io/).
The Authors: 
<table>  
    <tr>  
        <td> Thao Ma <a href="[https://github.com/thaomonster](https://github.com/thaomonster)">GH</td>  
        <td> Boone Epstein <a href="[https://github.com/deadbelly](https://github.com/gaj23)">GH</td>  
    </tr>  
<td><img src="[https://avatars3.githubusercontent.com/u/67611512?s=400&u=ef3bac38d4f7d6d8a899d26ce1f0eb169f11bb9b&v=4](https://avatars3.githubusercontent.com/u/67611512?s=400&u=ef3bac38d4f7d6d8a899d26ce1f0eb169f11bb9b&v=4)" alt="Ms. Turtle"  
 width="150" height="auto" /></td>  
 <td><img src="[https://avatars.githubusercontent.com/u/67235778?s=460&u=a113049894ce35dfc7f3973875e51d1d32bff313&v=4](https://avatars1.githubusercontent.com/u/68332132?s=460&u=a54dd9d3eede7c5ae0704846c510001c89dc88f7&v=4)" alt="The Dead Belly"  
 width="150" height="auto" /></td>  
</table>
