# code<!DOCTYPE html>
<html>
  <head>
    <title>SURVEY FORM</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <h1 id="title">FreeCodeCamp Survey Form</h1>
    <p id="description">A form to gather feedback about freeCodeCamp</p>
    <form id="survey-form" action="submit_survey" method="post">
      <label for="name">Name:</label>
      <input required id="name" type="text" name="name" placeholder="Enter Your Name">
      <label id="name-label" for="name">Your Name:</label>
      
      <label for="email">Email:</label>
      <input required id="email" type="email" name="email" placeholder="Enter Your Email"> 
      <label id="email-label" for="email">Your Email:</label>
      
      <label for="number">Number:</label>
      <input required id="number" type="number" name="number" placeholder="Enter a Number" min="0" max="100">
      <label id="number-label" for="number">Your Number:</label> 
      
      <label for="role">Which option best describes your current role?</label>
      <select id="dropdown" name="role">
        <option value="student">Student</option>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="other">Other</option>
      </select>
      
      <label for="recommend">Would you recommend freeCodeCamp to a friend?</label>
      <select id="recommend" name="recommend">
        <option value="definitely">Definitely</option>
        <option value="maybe">Maybe</option>
        <option value="not_sure">Not sure</option>
      </select>
      
      <label for="favorite-feature">What is your favorite feature of freeCodeCamp?</label>
      <select id="favorite-feature" name="favorite-feature">
        <option value="projects">Projects</option>
        <option value="challenges">Challenges</option>
        <option value="community">Open Source Community</option>
        <option value="videos">Videos</option>
        <option value="other">Other</option>
      </select>
      
      <label for="improvements">What would you like to see improved? (Check all that apply)</label>
      <input type="checkbox" id="front-end" name="improvements" value="front-end">
      <label for="front-end">Front-end Projects</label>
      <input type="checkbox" id="back-end" name="improvements" value="back-end">
      <label for="back-end">Back-end Projects</label>
      <input type="checkbox" id="data-visualization" name="improvements" value="data-visualization">
      <label for="data-visualization">Data Visualization</label>
      
      
      <label>Radio Group 1:</label>
      <input type="radio" id="radio1a" name="radioGroup1" value="option1">
      <label for="radio1a">Option 1</label>
      <input type="radio" id="radio1b" name="radioGroup1" value="option2">
      <label for="radio1b">Option 2</label>
      
      <label>Radio Group 2:</label>
      <input type="radio" id="radio2a" name="radioGroup2" value="option3">
      <label for="radio2a">Option 3</label>
      <input type="radio" id="radio2b" name="radioGroup2" value="option4">
      <label for="radio2b">Option 4</label>
      
      <label for="comments">Any comments or suggestions?</label>
      <textarea id="comments" name="comments" placeholder="Enter your comment here..."></textarea>
      
      <input type="submit" id="submit" value="Submit"> 
    </form>
  </body>
</html>
