#include <stdio.h>

int main(){
    int T;
    char c;
    int amount;
    
    scanf("%d",&T);
    getchar();
    
    while(T--){
        amount=0;
        while((c=getchar())!='\n'){
            if(c<0 || c>127)
                amount++;
        }
        printf("%d\n",amount/2);
    }
        
    
    return 0;
}