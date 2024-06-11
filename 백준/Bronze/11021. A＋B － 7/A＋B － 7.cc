#include <iostream>
using namespace std;

int main(){
    int cnt;
    cin >> cnt;
    
    for(int i=1; i<=cnt; i++) {
        int A, B;
        cin >> A >> B;
        cout << "Case #" << i << ": " << A + B << endl;
    }
}