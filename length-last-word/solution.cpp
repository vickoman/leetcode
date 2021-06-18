class Solution {
public:
    int lengthOfLastWord(string s) {
        int c = 0;
        int n = s.size();
        int i = 0;
        
        while(i<n) {
            if (s[i] != ' ') {
                c++;
                i++;
            } else {
                while(i<n && s[i] == ' ') i++;
                
                if(i == n) {
                    return c;
                }else {
                    c = 0;
                }
            }
        }
        return c;
    }
};