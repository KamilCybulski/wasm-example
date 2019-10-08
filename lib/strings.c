#include <stdio.h>
#include <emscripten.h>

void addItemsToList(void) {
  char items[][15] = {
    "bigos",
    "zapalki",
    "tancerz",
    "flaga hondurasu",
  };

  for (int i = 0; i < sizeof(items) / sizeof(items[0]); i++) {
    EM_ASM({ appendText($0, $1) }, items[i], sizeof(items[0]));
  }
}
