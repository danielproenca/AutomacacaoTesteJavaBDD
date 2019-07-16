package br.ce.wcaquino.runners;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/",
				 glue = "br.ce.wcaquino.steps",
				 plugin = "pretty",
				 monochrome = true,
				 snippets = SnippetType.CAMELCASE,
				 dryRun = false,
				 strict = true)
public class Runner_aprender_cucumber {

}
