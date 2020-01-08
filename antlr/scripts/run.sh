cd ..
BASE=$PWD
cd generated/classes
grun com.kastkode.mascii2.antlrgenerated.Mascii music -tree $BASE/test/debug.txt
#grun com.kastkode.mascii2.antlrgenerated.Mascii music -gui $BASE/test/debug.txt

