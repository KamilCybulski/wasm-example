#include <string.h>

void getStringFromC(char * offset, int length);

void sayHello(void) {
  char * msg = "Hello world";
  getStringFromC(msg, strlen(msg));
}
