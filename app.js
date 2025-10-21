    var recData = document.getElementById ('digits');
    var result = document.getElementById ('result');

    function getData (data) {

      if(result.value === 'Error') {
        // deleteValue ()
        recData.value = recData.value.slice (0 , -1);
        result.value = '';
    }
    recData.value += data;

        

    }
        console.log(recData.value)


        function clearData () {

            recData.value= '';
            // result.value = '';

        }

        function deleteValue () {
            recData.value= recData.value.slice (0,-1);
        }

        var isOkay = false;
        function calculateNow () {
            var opt = ['/','+','-', '%','*','.'];

            for(var i = 0 ; i < opt.length; i++) {
                if(recData.value[0] === opt [i] || recData.value [recData.value.length -1] === opt[i] ||
                    recData.value === opt [i] + opt[i] ) {
                
                    result.value = 'Error'
                    isOkay = true;
                    return;
                }
            }
            var finalResult = eval (recData.value);
            
            result.value = finalResult;
        } 
        

      


