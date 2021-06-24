class Solution {
public:
    vector<string> fizzBuzz(int n) {
        vector<string> narg;
        for(int i=1; i<=n; i++){
            if(i%3 == 0 && i%5 == 0){
                narg.push_back("FizzBuzz");
            }else if(i%5 == 0){
                narg.push_back("Buzz");
            }else if(i%3 == 0){
                narg.push_back("Fizz");
            }else{
                narg.push_back(to_string(i));
            }
        }
        return narg;
    }
};