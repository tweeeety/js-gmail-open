$(function(){
var Util = {};
Util.hashToQueryString = function(hash) {
  var qs = '',
  sep = '?',
  queryDelim = '&',
  paramDelim = '=',
  tmpArr = [];
  for ( var key in hash ) {
    tmpArr.push(key+paramDelim+hash[key]);
  }
  var qs = sep + tmpArr.join(queryDelim);
  return qs;
};
Util.getGMailUrl = function(opt) {
  var _this = this;
  var baseUrl = "https://mail.google.com/mail/";
  return baseUrl + (function(opt, subopt) { for(var key in subopt) opt[key]=subopt[key]; return _this.hashToQueryString(opt) })({view:"cm", fs:1}, opt);
};
Util.attachAnchorToGmail = function($content, opt) {
  if( typeof $content === "undefined" ) return false;
  $content.prop("href", this.getGMailUrl(opt)).prop("target", "blank");
};

var content = $(".mail-to");
var address = content.text();
Util.attachAnchorToGmail(content, {to:address});

});