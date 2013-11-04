function scopeTest(b) {

    if (b) { var i = 1; }
    console.log(i);

}

scopeTest(true);
scopeTest(false);