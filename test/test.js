var parser = require("../dist/parser")
var fs = require("fs");
function test(){
    var testFile = fs.readFileSync("test.gml");
    try{
        parser.parse(testFile.toString())
    } catch (e){
        if(e.location == undefined)
            throw e; //If it's not a parse error

        console.error(e.name + ": "
                    + "" + e.location.start.line + ":" + e.location.start.column + "-"
                    + "" + e.location.end.line + ":" + e.location.end.column + " - "
                    + e.message)
        return;
    }
    console.log("All tests passed!")
}
test()
