$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/login.feature");
formatter.feature({
  "name": "Login to the application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login the application",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "loginSteps.launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login the url \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.login_the_url(String)"
});
