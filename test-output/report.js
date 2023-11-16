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
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username \"admin@yourstore.com\" and password \"admin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.enter_the_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login the application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "Login the url \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter the username \"\u003cemail\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login the application",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username \"admin@yourstore.com\" and password \"admin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.enter_the_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login the application",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username \"admin@yourstore.com\" and password \"admin123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.enter_the_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
});