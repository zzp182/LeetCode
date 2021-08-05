
var longestPalindrome = function(s) {
    if( s.length < 2){
        return s   
    }
    let start = 0;
    let maxlength =1;
    function getHuiString(left,right){
        while(left>=0 && right < s.length && s[left] === s[right]){
            if(right - left + 1 > maxlength){
                maxlength = right - left + 1
                start = left
            }
            left--;
            right++;
        }  
    }
    for(var i=0;i<s.length;i++){
        getHuiString(i-1 , i+1)
        getHuiString(i,i+1)
    }
    return s.substring(start ,start+maxlength)
    
};

str = 'abcdcbf'
str1= 'aaaa'
console.log(longestPalindrome(str))
console.log(longestPalindrome(str1))