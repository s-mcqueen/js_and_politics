#include <stdio.h>

void f() {
    int a = 1;
    {
        int a = 2;
    } 
    printf("%d\n", a);
}


int main() {
    f();
}

