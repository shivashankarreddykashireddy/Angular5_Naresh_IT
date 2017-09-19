function fun_one() {
    function fun_two() {
       console.log("Closure !");
    }
    fun_two();
}

fun_one();

