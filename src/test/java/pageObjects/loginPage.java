package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class loginPage {

	public WebDriver ldriver;
	
	public loginPage(WebDriver rdriver){
		
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
		
	}
	
	@FindBy(id="Email")
	WebElement email;
	
	@FindBy(id="Password")
	WebElement password;
	
	@FindBy(xpath="//button[@type='submit']")
	WebElement loginbtn;
	
 public void setUsername(String username) {
	 email.clear();
	 email.sendKeys(username);
 }
	
 public void setPassword(String pwd) {
	 password.clear();
	 password.sendKeys(pwd);
	 
 }
	public void clicklogin() {
		loginbtn.click();
	}
}
