package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pageObjects.loginPage;

public class loginSteps {

	public WebDriver driver;
	public loginPage lp;
	
	@Given("Launch the browser")
	public void launch_the_browser() {
	   System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//drivers/chromedriver.exe");
	   driver = new ChromeDriver();
	   lp =new loginPage(driver);
	}

	@Then("Login the url {string}")
	public void login_the_url(String url) throws InterruptedException {
	    driver.get(url);
	    Thread.sleep(5000);
	    }

	@Then("Enter the username {string} and password {string}")
	public void enter_the_username_and_password(String username, String password) throws InterruptedException {
	
	    lp.setUsername(username);
	    Thread.sleep(3000);
	    lp.setPassword(password);
	    Thread.sleep(3000);
	}

	@Then("click on login")
	public void click_on_login() throws InterruptedException {
	   lp.clicklogin();
	   Thread.sleep(5000);
	}

	@Then("close browser")
	public void close_browser() {
	    driver.close();
	}







}
