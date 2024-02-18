/*Objective: Learn if - else and switch - case
    Create 2 functions : launchBrowser, runTests
    where,
    a) launchBrowser need to take input as browserName (string) and do not return any
        - use if, else (chrome or otherwise)
        - just print
    b) runTests need to take input as testType (string) and do not return any
        - use switch case (smoke, sanity, regression, default (smoke))
        - just do print
 
    Call that function from the javascript*/
let browserName = "Chrome"
    function launchBrowser(browser){
        if (browserName == "Chrome")
        {
            console.log("Browser is Chrome")
        }
        else{
            console.log("Browser is not Chrome")
        }
    }
    launchBrowser();
    runTests();
    testType = "Smoke";
    function runTests(testType){
        switch (testType){
            case ("Smoke"):{
                console.log("Testtype is Smoke");
        }
        case("Sanity"):{
            console.log("Testtype is Sanity");
        }
        case("Regression"):{
            console.log("Testtype is Regression");
        }
        default:{
            console.log("Testtype is Smoke");
        }
        

        }

    }