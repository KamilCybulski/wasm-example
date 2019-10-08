void displayNumber(int n);

int getDouble(int n) { 
  return n * 2;
}

int displayNumberDouble(int n) {
  displayNumber(getDouble(n));
}
