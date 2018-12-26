var soal2 =  {
    reverseString: function(value){
        var result = "";
        for (var i = value.length - 1; i >= 0; i--) {
            result += value[i];
        }
        return result;
    },
    charRemove : function (word, index) {
        if(index > word.length-1) return word;
        return word.substr(0, index) + word.substr(index + 1);
    },
    lexicograph : function(value){
        var result = "";
        value = soal2.reverseString(value);
        for(var i = 0; i < value.length ; i ++){
            var charIndex = result.indexOf(value[i]);
            if(charIndex === -1){
                result += value[i];
            }else{
                if(value[charIndex] > value[charIndex+1]) {
                    var charResultIndex = result.indexOf(value[i]);
                    result = soal2.charRemove(result, charResultIndex);
                    result += value[i];
                }
            }
        }
        return result;
    }
};
module.exports = soal2;