var jsdom = require("jsdom");

var retrieve = function (param) {
  return new Promise(function(resolve, reject){
    try {
      var pattern = "^((https|http|ftp|rtsp|mms)?://)"
        + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?"
        + "(([0-9]{1,3}\.){3}[0-9]{1,3}"
        + "|"
        + "([0-9a-z_!~*'()-]+\.)*"
        + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\."
        + "[a-z]{2,6})"
        + "(:[0-9]{1,4})?"
        + "((/?)|"
        + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
     var regex = new RegExp(pattern);

      var isURL = regex.test(param);

      var callback = function(errors, window){
        if(errors){
          reject(errors);
        }else{
          resolve(window)
        }
      };

      if(!isURL){
        jsdom.env(param,
            ["http://code.jquery.com/jquery.js"],
            callback
        );
      }else{
        jsdom.env({ url: param,
            scripts: ["http://code.jquery.com/jquery.js"],
            done: callback
        });
      }

    } catch (err) {
      reject(err)
    }
  });
};

module.exports = retrieve;
