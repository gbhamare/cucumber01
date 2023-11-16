package TestRunner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions
	(
			
		features=".//features/login.feature" ,
		glue= "stepDefinitions",
		plugin= {"pretty","html:test-output"},
		dryRun=false,
		monochrome = true

		
			)




public class testRun {




}
